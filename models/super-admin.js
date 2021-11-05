const mongoose = require('mongoose');
const schema = mongoose.Schema;
const superAdminSchema = schema({
    username:String,
    password:String
})

module.exports = mongoose.model('Superadmin',superAdminSchema)
