const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/verify', verifyToken, (req, res) => {
	res.status(200).json({ authenticated: true });
});
module.exports = router;