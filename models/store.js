const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const storeSchema = Schema({
    name:String,
})

module.exports = mongoose.model("Store",storeSchema)