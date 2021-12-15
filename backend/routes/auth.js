const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation');

require('dotenv').config();

router.post ('/register', async (req, res) => {
    console.log ('Incoming Register Data: ', req.body)
    const { error } = registerValidation(req.body);
    if (error) {
        console.log ('Error in validation');
        return res.status(400).send(error.details[0].message);
    }
    
    const emailExist = await User.findOne({userEmail: req.body.userEmail})
    if (emailExist) {
        console.log ('Error in email check');
        return res.status(400).send('That email is already in use')
    }
    
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User ({
        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        userName:   req.body.userName,
        password:   hashedPassword,
        userEmail:  req.body.userEmail,
        isAdmin:    req.body.isAdmin
    });
    try {
        const saveUser = await user.save()
        console.log ("Saving User")
        res.send (saveUser._id)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async (req,res) => {
    console.log ("login incoming data: ",req.body);

    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({userName: req.body.userName});
    if (!user) return res.status(400).send('Username or Password is incorrect');

    const validPass = bcrypt.compareSync(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Username or Password is incorrect');
    
    const token = jwt.sign({_id: user._id}, process.env.SECRET);
    res.header ('authToken', token).send(token);
    // await localStorage.setItem('auth-token', token);
    console.log ('returning: ', token )
})

router.post('/test', (req, res) => {
    console.log ('test body: ', req.body);
    console.log ('test headers ', req.headers);
    res.status (200).send('Test Route');
})

module.exports = router;