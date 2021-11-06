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

    },

    adminMenu: async (req, res) => {

    },

    authMenu: async (req, res) => {

    }
}