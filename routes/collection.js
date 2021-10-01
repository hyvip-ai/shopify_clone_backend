const express = require('express')
const api = express.Router();
api.get("/getAll");
api.post("/postCollectionItem");
api.post("/deleteACollection/:id");
module.exports = api;