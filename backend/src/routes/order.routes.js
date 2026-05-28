const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { verifyToken } = require('../middlewares/verifyToken');
router.get('/allorders', verifyToken, orderController.getAllOrders);

router.post('/neworder', verifyToken, orderController.createOrder);

router.put('/updateorder/:id', verifyToken, orderController.updateOrder);

router.delete('/deleteorder/:id', verifyToken, orderController.deleteOrder);

module.exports = router;