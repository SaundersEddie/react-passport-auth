const router = require('express').Router()
const userInfoRoute = require('./user');

// User routes
router.use('/user', userInfoRoute)

module.exports = router