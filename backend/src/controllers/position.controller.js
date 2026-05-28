const positionModel = require('../models/postition.model');

const getAllPositions = async (req, res) => {
  try {
    const allPositions = await positionModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPositions };