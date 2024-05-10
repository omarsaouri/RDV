const express = require("express");
const specialiteRouter = express.Router();
const addSpecialite = require("../../controllers/specialite/addSpecialiteController");
const getAllSpecialites = require("../../controllers/specialite/getAllSpecialitesController");
const getSpecialiteById = require("../../controllers/specialite/getSpecialiteByIdController");
const updateSpecialite = require("../../controllers/specialite/updateSpecialiteController");
const deleteSpecialite = require("../../controllers/specialite/deleteSpecialiteController");
const specialiteMiddleware = require("../../Middlewares/specialiteMiddleware");


specialiteRouter.post("/", specialiteMiddleware, addSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteById);
specialiteRouter.put("/:id", specialiteMiddleware, updateSpecialite);
specialiteRouter.delete("/:id", deleteSpecialite);

module.exports = specialiteRouter;
