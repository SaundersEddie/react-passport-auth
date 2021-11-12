// const express = require('express');
const router = require('express').Router();
const passport = require('../../passport');
const userController = require('../../controller/controller.js');

// this route is just used to get the user basic info
router.get('/user', userController.getUser);

router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
// router.post('/logout', userController.logout);
router.post('/register', userController.register);

module.exports = router;
