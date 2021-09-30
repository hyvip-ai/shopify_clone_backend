const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bannerMiddleSchema = Schema({
    head:String,
    data:String,
    image:String
})

module.exports = mongoose.model("MiddleBanner",bannerMiddleSchema)