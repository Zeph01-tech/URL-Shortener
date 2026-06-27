const mongoose = require('mongoose')
const nanoid = require('nanoid')

const shortUrlSchema = new mongoose.Schema({
    fullUrl: String,
    shortUrl: String,
    shortCode: {
        type: Number,
        default: () => nanoid.nanoid(6)
    },
    clicks : {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model('ShortUrl', shortUrlSchema)