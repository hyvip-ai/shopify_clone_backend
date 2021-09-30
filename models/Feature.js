const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureSchema = Schema({
    image:String,
    head:String,
    data:String
})

module.exports = mongoose.model("Feature",featureSchema)