const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [ true, 'Username should be required with valid username!']
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email must be require email ID.'],
        unique: [true, 'Email must be unique email ID.']
    },
    password: {
        type: String,
        require: [true, 'Password is require!'],
        select: false
    }   
})

const userModule = mongoose.model("user", UserSchema)

module.exports = userModule