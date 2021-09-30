const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const testimoanilsSchema = Schema({
    data:String,
    name:String,
    designation:String
})

module.exports = mongoose.model("Testimonails",testimoanilsSchema)