const User = require('../models/user.js');

require('dotenv').config();

module.exports = {
    registerUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save()
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error)
        }
    },

    loginUser: async (req, res) => {
        // We need to find a matching user, if located return the results
        // If not located return we never found that user
        // Req should contain userName field
        try {
            console.log(req.params)
            if (req.params) {
                User.find({
                    userName: req.param.username
                })

            }
            res.status(201).json({ msg: req.params })
        } catch (error) {
            console.log(error)
        }
    },

    adminMenu: async (req, res) => {
        try {
            console.log("Admin Menu")
        } catch (error) {
            console.log(error)
        }
    },

    authMenu: async (req, res) => {
        try {
            console.log("Are we authenticated")
        } catch (error) {
            console.log(error)
        }
    }
}
