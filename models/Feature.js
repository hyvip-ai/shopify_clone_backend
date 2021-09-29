const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const featureSchema = Schema({
    image:String,
    heading:String,
    data:String
})
module.exports = mongoose.model("Product",featureSchema)