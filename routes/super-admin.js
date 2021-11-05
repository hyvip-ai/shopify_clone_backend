const api = require('express').Router();
const superAdminController = require("../controllers/super-admin")
api.post("/loginAuperAdmin",superAdminController.loginAuperAdmin);
api.get("/allStores",superAdminController.getAllStores);
api.post("/registerSuperAdmin",superAdminController.registerSuperAdmin);
module.exports = api