const express = require("express");
const specialiteRouter = express.Router();
const addSpecialite = require("../../controllers/specialite/addSpecialiteController");
const {
  getAllSpecialites,
  getSpecialiteParId,
} = require("../../controllers/specialite/getSpecialiteController");
const modifierSpecialite = require("../../controllers/specialite/updateSpecialiteController");
const supprimerSpecialite = require("../../controllers/specialite/deleteSpecialiteController");

specialiteRouter.post("/", addSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteParId);
specialiteRouter.put("/:id", modifierSpecialite);
specialiteRouter.delete("/:id", supprimerSpecialite);

module.exports = specialiteRouter;
