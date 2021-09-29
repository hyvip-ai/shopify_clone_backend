const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const collectionSchema = Schema({
    image:String,
    name:String,
    data:String
})
module.exports = mongoose.model("Product",collectionSchema)