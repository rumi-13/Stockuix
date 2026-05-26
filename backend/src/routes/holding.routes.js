const express = require('express');
const router = express.Router();
const holdingModel = require('../models/holding.model');

router.get('/allholdings', async (req, res) => {
   let allHoldings = await holdingModel.find({});
   try {
    res.status(200).json(allHoldings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  
});


module.exports = router;