const express = require('express')
const api = express.Router();

api.get("/getProducts");
api.post("/postProduct");
api.get("/getProductDetails/:id");
api.get("/deleteproduct/:id")

module.exports = api