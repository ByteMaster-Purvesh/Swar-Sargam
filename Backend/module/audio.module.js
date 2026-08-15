const mongoose = require('mongoose')

const AudioSchema = new mongoose.Schema({
    audio : String,
    URL : String
})