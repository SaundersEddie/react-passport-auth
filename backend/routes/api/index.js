const router = require('express').Router()
// const reviewsRoutes = require('./reviews')
const userInfoRoute = require('./user');

// Reviews routes
// router.use('/reviews', reviewsRoutes)

// User routes
router.use('/user', userInfoRoute)

module.exports = router
