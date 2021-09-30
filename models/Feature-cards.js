const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureCardsSchema = Schema({
    image:String,
    title:String,
    data:String
})