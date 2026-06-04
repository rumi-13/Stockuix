const express = require('express');
const positionController = require('../controllers/position.controller');

const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken');
router.get('/allpositions', verifyToken, positionController.getAllPositions);

module.exports = router;
