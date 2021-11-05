const express = require('express');
const router = express.Router();

router.post('/register', registerUser);

router.get('/login', loginUser);
router.get('/adminmenu', adminMenu);
router.get('/authmenu', authMenu);

module.exports = Router;
