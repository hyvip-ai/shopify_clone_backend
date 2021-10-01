const express = require('express')

const api = express.Router();
api.get("/getAllImages");
api.post("/addAnImage");
api.get("/deleteAnImage")
module.exports  = api;