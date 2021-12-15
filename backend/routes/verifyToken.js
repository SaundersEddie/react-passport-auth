const jwt = require('jsonwebtoken')
require('dotenv').config();


module.exports = function auth (req,res,next) {
    const token = req.headers.authtoken;
    console.log ('verify: ', req.headers.authtoken);
    if(!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified;
        next()
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}