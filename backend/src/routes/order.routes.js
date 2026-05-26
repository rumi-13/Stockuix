const express = require('express');
const router = express.Router();
const orderModel = require('../models/order.model');
const holdingModel = require('../models/holding.model');

// Helper to rebuild holdings from all orders
const rebuildHoldings = async () => {
    try {
        const orders = await orderModel.find({});
        const summary = {};

        orders.forEach(order => {
            if (!summary[order.name]) {
                summary[order.name] = { buyQty: 0, buyValue: 0, sellQty: 0, lastPrice: order.price };
            }
            if (order.mode === 'BUY') {
                summary[order.name].buyQty += order.qty;
                summary[order.name].buyValue += (order.qty * order.price);
            } else {
                summary[order.name].sellQty += order.qty;
            }
            summary[order.name].lastPrice = order.price; // Fallback LTP
        });

        await holdingModel.deleteMany({});

        const newHoldings = Object.keys(summary).map(name => {
            const s = summary[name];
            const netQty = s.buyQty - s.sellQty;
            if (netQty <= 0) return null;

            const avg = s.buyValue / s.buyQty;
            return {
                name,
                qty: netQty,
                avg: avg,
                price: s.lastPrice,
                net: ((s.lastPrice - avg) / avg * 100).toFixed(2) + "%",
                day: (Math.random() > 0.5 ? "+" : "-") + (Math.random() * 2).toFixed(2) + "%",
                isLoss: s.lastPrice < avg
            };
        }).filter(h => h !== null);

        if (newHoldings.length > 0) {
            await holdingModel.insertMany(newHoldings);
        }
    } catch (err) {
        console.error("Rebuild holdings failed:", err);
    }
};

router.get('/allorders', async (req, res) => {
    try {
        const allOrders = await orderModel.find({});
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/neworder', async (req, res) => {
    try {
        const newOrder = new orderModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode
        });

        await newOrder.save();
        await rebuildHoldings();
        res.status(200).json("Order Saved Successfully");
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/updateorder/:id', async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode
        });
        await rebuildHoldings();
        res.status(200).json("Order Updated Successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/deleteorder/:id', async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.params.id);
        await rebuildHoldings();
        res.status(200).json("Order Deleted Successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;