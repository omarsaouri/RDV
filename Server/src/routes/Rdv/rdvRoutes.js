const express = require("express");
const rdvRouter = express.Router();

rdvRouter.get("/all", middleware, controller);

module.exports = rdvRouter;
