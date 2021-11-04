const express = require('express')
const api = express.Router();
const productController = require("../controllers/Product")
api.get("/getProducts/:store",productController.getallProducts);
api.post("/postProduct/:store",productController.addproduct);
api.get("/deleteProducts/:store/:id",productController.deleteProduct);
api.get("/getProductById/:store/:id",productController.getProductById);

module.exports = api