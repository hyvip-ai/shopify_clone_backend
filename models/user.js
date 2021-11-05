const mongoose = require('mongoose');
const schema = mongoose.Schema;
const superAdminSchema = schema({
    username:String,
    password:String,
    first_name:String,
    last_name:String,
    phone_number:String,
    country:String
})

module.exports = mongoose.model('Superadmin',superAdminSchema)
