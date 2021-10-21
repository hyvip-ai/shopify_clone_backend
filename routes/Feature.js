const express = require('express')
const api = express.Router();
const featureController = require("../controllers/Feature")
api.get("/getFeatures/:store",featureController.getAllFeature);
api.post("/postnewFeature/:store",featureController.postFeature);
api.get("/deletFeature/:store/:id",featureController.deleteFeatures)
module.exports = api