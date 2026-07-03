const express = require("express")
const mongoose = require("mongoose")
const shortUrl = require('./models/shortUrl')
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/urlShortener')

const app = express()
app.use(express.json())

app.post("/shortenUrl", async (req, res) => {
    if (!/^https?:\/\//i.test(req.body.url))
        req.body.url = `https://${req.body.url}`

    if(req.body?.url) {
        const check = await shortUrl.findOne({ fullUrl: req.body.url })
        if(check) {
            return res.status(200).json({
                msg: "Shorturl already exists",
                shortUrl: `http://localhost/3000/${check.shortId}`
            })
        }
        await shortUrl.create({ fullUrl: req.body.url })

        const newUrl = await shortUrl.findOne({ fullUrl: req.body.url })
        return res.status(200).json({
            shortUrl: `http://localhost:3000/${newUrl.shortId}`
        })
    }
    else return res.status(400).send("Fk u")
})

app.get("/:shortid", async (req, res) =>  {
    const result = await shortUrl.findOne({ shortId: req.params.shortid })
    if(!result) {
        return res.status(404).json({
            msg: "No such url made"
        })
    }
    res.redirect(result.fullUrl)
})

app.listen(process.env.PORT, () => {
    console.log("Started")
})
