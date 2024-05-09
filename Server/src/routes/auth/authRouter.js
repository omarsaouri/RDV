const express = require("express");
const authRouter = express.Router();
const loginAdmin = require("../../controllers/auth/authAdminController");

authRouter.post("/admin", loginAdmin);

module.exports = authRouter;
