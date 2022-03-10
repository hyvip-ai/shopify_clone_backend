const express = require("express");
const deafultController = require("../controllers/deafult");
const api = express.Router();
api.get("/", deafultController.project);
api.get("/default", deafultController.status);
module.exports = api;
