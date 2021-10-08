const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const testimoanilsSchema = Schema({
    data:String,
    name:String,
    designation:String,
    image:String,
    store:{ref:"Store",type:Schema.ObjectId}

})

module.exports = mongoose.model("Testimonails",testimoanilsSchema)