const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    idVal: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('counter', counterSchema)