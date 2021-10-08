const express = require('express')
const api = express.Router();
const featureController = require("../controllers/Feature")
api.get("/getFeatures/:store",featureController.getAllFeature);
api.post("/postnewFeature/:store",featureController.postFeature);
module.exports = api