const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bannerSchema = Schema({
    head:String,
    data:String,
    image:String,
    position:String,
    store:{ref:"Store",type:Schema.ObjectId}
})

module.exports = mongoose.model("banner",bannerSchema)