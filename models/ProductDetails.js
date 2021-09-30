const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const featureProductDetailsSchema = Schema({
    details:String,
    product_is:{type:Schema.ObjectId,ref:Product}
})

module.exports = mongoose.model("ProductDetails",featureProductDetailsSchema)