const express = require('express')
const bannerController = require("../controllers/banner")
const api = express.Router();
api.get("/getBanner/:store/:position",bannerController.getBanner);
// api.post("/updateBanner/:position");
api.post("/addBanner/:store",bannerController.addBanner);
api.get("/getAllBanner/:store",bannerController.getAllBanner)
module.exports = api;