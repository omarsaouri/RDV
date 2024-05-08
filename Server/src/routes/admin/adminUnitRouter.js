const express = require("express");
const adminUnitRouter = express.Router();

const addAdministrateurUnite = require("../../controllers/administrateurUnite/addAdminUniteController");
const deleteAdministrateurUnite = require("../../controllers/administrateurUnite/deleteAdminUniteController");
const getAllAdministrateurUnite = require("../../controllers/administrateurUnite/getAllAdminUniteController");
const getAdministrateurUniteById = require("../../controllers/administrateurUnite/getAdminUniteByIdController");
const updateAdministrateurUnite = require("../../controllers/administrateurUnite/updateAdminUniteController");

const administrateurUniteValidation = require("../../Validation/adminUniteValidation");
const errorHandlerMiddleware = require("../../Middlewares/errorHandlerMiddleware");

adminUnitRouter.post("/", administrateurUniteValidation, errorHandlerMiddleware, addAdministrateurUnite);
adminUnitRouter.get("/", getAllAdministrateurUnite);
adminUnitRouter.get("/:id", getAdministrateurUniteById);
adminUnitRouter.put("/:id", administrateurUniteValidation, errorHandlerMiddleware, updateAdministrateurUnite);
adminUnitRouter.delete("/:id", deleteAdministrateurUnite);

module.exports = {adminUnitRouter};
