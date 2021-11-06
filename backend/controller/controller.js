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
        try {
            console.log('login')
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
