const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        unique: false,
        required: true,
        max: 255
    },
    lastName: {
        type: String,
        unique: false,
        required: true,
        max: 255
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        unique: false,
        required: true,
        min: 8,
    },
    userEmail: {
        type: String,
        unique: true,
        required: true,
        max: 255
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema );
