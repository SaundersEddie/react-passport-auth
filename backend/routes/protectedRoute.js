const router = require('express').Router();
const verify = require('./verifyToken');
const User = require ('../models/User');

router.get('/', verify, async (req,res) => {
    console.log ('protectRoute: ', req.headers.authtoken)
    console.log ('verify userID: ', req.user._id);
    const testUser = await User.findOne({_id: req.user._id});
    console.log ('returned test user: ', testUser);
    res.json ({Response: 'Verified User'});
})

module.exports = router;