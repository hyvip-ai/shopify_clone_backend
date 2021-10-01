const express = require('express')
const api = express.Router();
api.get("/getFeatures");
api.post("/postnewFeature");
api.get("/deleteAFeature/:id");
module.exports = api