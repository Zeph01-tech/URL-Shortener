const express = require("express")
const mongoose = require("mongoose")
const shortUrl = require('./models/shortUrl')
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/urlShortener')

const app = express()
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    console.log(`Here's the request: ${req.body}`)
    res.send("working")
})

app.post("/shortenUrl", async (req, res) => {
    await shortUrl.create({ full: req.body.fullUrl })
})

app.listen(process.env.PORT, () => {
    console.log("Started")
})
