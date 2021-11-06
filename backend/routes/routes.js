const express = require('express');
const userController = require('../controller/controller.js');

const router = express.Router();


router.post('/register', userController.registerUser);

// router.get('/login', loginUser);
// router.get('/adminmenu', adminMenu);
// router.get('/authmenu', authMenu);

module.exports = router;
