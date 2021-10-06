const express = require('express')
const api = express.Router();
const storeController = require("../controllers/store")
api.post("/createStore",storeController.createStore)

module.exports = api