const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/signup', authController.signUp);
router.post('/login',  authController.login);
router.post('/logout', verifyToken, authController.logout);
router.get('/verify', verifyToken, authController.verifyAuth);
router.get('/me', verifyToken, authController.getCurrentUser);
router.delete('/delete-account', verifyToken, authController.deleteAccount);
module.exports = router;