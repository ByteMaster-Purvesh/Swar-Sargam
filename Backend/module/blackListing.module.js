const mongoose = require('mongoose')

const blackListScheama = new mongoose.Schema({
    token : {
        type: String,
        require: [ true, 'Tocken is required to blacklist itself.']
    }
    
}, {
    timestamps: true
})

const blacklistModel = mongoose.model( 'blackList' , blackListScheama)

module.exports = blacklistModel 