const express = require('express')
const api = express.Router();
const storeController = require("../controllers/store")
api.post("/createStore",storeController.createStore)
api.post("/editStore",storeController.editStore)
api.get("/getStore/:store",storeController.getStoreName)

module.exports = api