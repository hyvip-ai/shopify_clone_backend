const express = require('express')
const api = express.Router();
const testiCOntroller = require("../controllers/testimonials")
api.get("/gettetsimonails/:store",testiCOntroller.gettestimonials)
api.post("/addtestimonials/:store",testiCOntroller.addtetsimonials);
module.exports = api