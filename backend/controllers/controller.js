const db = require('../models');
const bcrypt = require('bcryptjs')

// Defining methods for the userController
module.exports = {
    getUser: (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user });
        } else {
            return res.json({ user: null });
        }
    },
    register: (req, res) => {
        console.log(req.body)
        const { firstName, lastName, userName, password, userEmail, isAdmin } = req.body;
        db.User.findOne({ userName: userName }, (err, userMatch) => {
            if (userMatch) {
                return res.json({
                    error: `Sorry, already a user with the username: ${userName}`
                });
            }
            const newUser = new db.User({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                userEmail: userEmail,
                isAdmin: isAdmin,
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                return res.json(savedUser);
            });
        });
    },
    logout: (req, res) => {
        if (req.user) {
            req.session.destroy();
            res.clearCookie('connect.sid'); // clean up!
            return res.json({ msg: 'logging you out' });
        } else {
            return res.json({ msg: 'no user to log out!' });
        }
    },
    auth: function (req, res, next) {
        console.log("In auth:", req.body);
        next();
    },
    authenticate: (req, res) => {
        console.log('In Authenticate:', req.body);
        //console.log('hit');
        const user = JSON.parse(JSON.stringify(req.user)); // hack
        const cleanUser = Object.assign({}, user);
        if (cleanUser) {
            // console.log(`Deleting ${cleanUser.password}`);
            delete cleanUser.password;
        }
        res.json({ user: cleanUser });
    }
};
