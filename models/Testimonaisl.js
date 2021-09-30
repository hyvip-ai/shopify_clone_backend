const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const testimonailsSchema = Schema({
    name:String,
    data:String,
    designation:String
})
module.exports = mongoose.model("Testimonials",testimonailsSchema)