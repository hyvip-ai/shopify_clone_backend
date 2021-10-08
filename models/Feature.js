const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureSchema = Schema({
    image:String,
    head:String,
    data:String,
    store:{ref:"Store",type:Schema.ObjectId}

})

module.exports = mongoose.model("Feature",featureSchema)