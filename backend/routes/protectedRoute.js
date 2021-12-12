const router = require('express').Router();
const verify = require('./verifyToken');
const User = require ('../models/User');

router.get('/', verify, async (req,res) => {
    console.log (req.user._id);
    const testUser = await User.findOne({_id: req.user._id});
    console.log (testUser);
    res.json ({Response: 'Verified User'});
})

module.exports = router;