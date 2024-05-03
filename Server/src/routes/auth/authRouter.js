const express = require("express");
const loginAdmin = require("../../controllers/auth/authAdminController");
const authRouter = express.Router();

authRouter.post("/admin", loginAdmin);

module.exports = authRouter;
