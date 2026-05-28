const express = require('express');
const router = express.Router();
const holdingController = require('../controllers/holding.controller');
const { verifyToken } = require('../middlewares/verifyToken');
router.get('/allholdings', verifyToken, holdingController.getAllHoldings);


module.exports = router;