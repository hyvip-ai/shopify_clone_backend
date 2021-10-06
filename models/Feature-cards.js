const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureCardsSchema = Schema({
    image:String,
    title:String,
    data:String,
    store:{ref:Store,type:Schema.ObjectId}

})

module.exports = mongoose.model("FeatureCards",featureCardsSchema);