const holdingModel = require('../models/holding.model');

const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await holdingModel.find({ user: req.user.id });
    res.status(200).json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllHoldings };