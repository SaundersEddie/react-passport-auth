const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')


const userSchema = new Schema({
    firstName: {
        type: String,
        unique: false,
        required: true
    },
    lastName: {
        type: String,
        unique: false,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    userEmail: {
        type: String,
        unique: true,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 5)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        // console.log('No password provided!');
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
})

// Create reference to User & export
const User = mongoose.model('User', userSchema, 'user')
module.exports = User
