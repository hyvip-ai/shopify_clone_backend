const express = require('express')
const imageController = require("../controllers/Feature-Image")
const api = express.Router();
api.get("/getAllImages/:store",imageController.getImages);
api.post("/addAnImage/:store",imageController.addImage);
api.get("/deleteAnImage/:store/:id",imageController.deleteImage)
module.exports  = api;