const express = require('express');
const userController = require('../controller/controller.js');

const router = express.Router();


router.post('/register', userController.registerUser);

router.get('/listall', userController.listAll);
router.get('/login/:username', userController.loginUser);
router.get('/adminmenu', userController.adminMenu);
router.get('/authmenu', userController.authMenu);

module.exports = router;
