const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bannerSchema = Schema({
    head:String,
    data:String,
    image:String,
    
})

module.exports = mongoose.model("banner",bannerSchema)