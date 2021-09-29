const express = require('express')
const api = express.Router();

api.get("/getProducts");
api.post("/postProduct");
api.get("/getProductDetails");

module.exports = api