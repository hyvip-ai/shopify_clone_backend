const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureProductSchema = Schema({
    image:String,
    name:String,
    price:String,
    details:String
})

module.exports = mongoose.model("Product",featureProductSchema)