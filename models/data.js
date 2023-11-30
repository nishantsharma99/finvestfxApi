const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    firstPrice: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('data', dataSchema)