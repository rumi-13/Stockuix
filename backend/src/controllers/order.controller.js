const orderModel = require('../models/order.model');
const holdingModel = require('../models/holding.model');

const rebuildHoldings = async (userId) => {
  try {
    const orders = await orderModel.find({ user: userId });
    const summary = {};

    orders.forEach((order) => {
      if (!summary[order.name]) {
        summary[order.name] = {
          buyQty: 0,
          buyValue: 0,
          sellQty: 0,
          lastPrice: order.price,
        };
      }

      if (order.mode === 'BUY') {
        summary[order.name].buyQty += order.qty;
        summary[order.name].buyValue += order.qty * order.price;
      } else {
        summary[order.name].sellQty += order.qty;
      }

      summary[order.name].lastPrice = order.price;
    });

    await holdingModel.deleteMany({});

    const newHoldings = Object.keys(summary)
      .map((name) => {
        const s = summary[name];
        const netQty = s.buyQty - s.sellQty;

        if (netQty <= 0) {
          return null;
        }

        const avg = s.buyValue / s.buyQty;

        return {
          user: userId,
          name,
          qty: netQty,
          avg,
          price: s.lastPrice,
          net: `${(((s.lastPrice - avg) / avg) * 100).toFixed(2)}%`,
          day: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 2).toFixed(2)}%`,
          isLoss: s.lastPrice < avg,
        };
      })
      .filter((holding) => holding !== null);

    if (newHoldings.length > 0) {
      await holdingModel.insertMany(newHoldings);
    }
  } catch (error) {
    console.error('Rebuild holdings failed:', error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await orderModel.find({ user: req.user.id });
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      user: req.user.id,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    await rebuildHoldings(req.user.id);
    res.status(200).json('Order Saved Successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    await orderModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      },
    );
    await rebuildHoldings(req.user.id);
    res.status(200).json('Order Updated Successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await orderModel.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    await rebuildHoldings(req.user.id);
    res.status(200).json('Order Deleted Successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};