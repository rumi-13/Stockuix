const express = require('express');
const positionModel = require('../models/postition.model');

const router = express.Router();

router.get('/allpositions', async (req, res) => {
   const allPositions = await positionModel.find({});
   try {
    res.status(200).json(allPositions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;