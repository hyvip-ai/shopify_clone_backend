const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureImagesSchema = Schema({
    image:String,
 
})

module.exports = mongoose.model("FeatureImage",featureImagesSchema)