const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureImagesSchema = Schema({
    image:String,
    store:{ref:"Store",type:Schema.ObjectId}
    
})

module.exports = mongoose.model("FeatureImage",featureImagesSchema)