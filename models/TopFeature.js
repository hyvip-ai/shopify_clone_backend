const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const topfeatureSchema = Schema({
    image:String,
    title:String,
    data:String
})
module.exports = mongoose.model("Product",featureSchema)