const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const productSchema = Schema({
    image:String,
    name:String,
    price:Number,
    data:String
})
module.exports = mongoose.model("Product",productSchema)