const express = require('express')
const api = express.Router();
const collectionController = require("../controllers/FeatureCards")
api.get("/getAllCollection/:store",collectionController.getCards);
api.post("/postCollectionItem/:store",collectionController.addCards);
api.get("/deleteCollection/:store/:id",collectionController.deletefeatureCards)
module.exports = api;