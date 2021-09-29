const express = require('express')
const deafultController = require("../controllers/deafult");
const api = express.Router();
api.get("/default",deafultController.status)
module.exports = api