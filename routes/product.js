const express = require('express')
const api = express.Router();
const productController = require("../controllers/Product")
api.get("/getProducts",productController.getallProducts);
api.post("/postProduct",productController.addproduct);
api.get("/deleteproduct/:id",productController.deleteProduct)

module.exports = api