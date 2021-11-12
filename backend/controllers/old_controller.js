const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

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

    listAll: async (req,res) => {
        try {
            const allUsers = await User.find({})
            res.status(201).json(allUsers)
        } catch (error) {
            console.log(error)
            
        }
    },

    loginUser: async (req, res) => {
        // We need to find a matching user, if located return the results
        // If not located return we never found that user
        // Req should contain userName and password field

        // Check username is valid
        // If username is valid get password field

        try {
            console.log(req.query.username);
            console.log(req.query.password);
            const loginUser = await User.findOne({userName: req.query.username})
            const passwordCheck = User.checkPassword(req.query.password)
            console.log (passwordCheck)
            // if (passwordCheck) {
            res.status(201).json({loginUser})
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
