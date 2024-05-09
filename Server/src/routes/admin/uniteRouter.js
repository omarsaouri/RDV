const express = require("express");
const ajouterUnite = require("../../controllers/unite/addUniteController");
const {
  getAllUnites,
  getUniteParId,
} = require("../../controllers/unite/getUniteController");
const modifierUnite = require("../../controllers/unite/updateUniteController");
const supprimerUnite = require("../../controllers/unite/deleteUniteController");

const uniteRouter = express.Router();

uniteRouter.post("/", ajouterUnite);
uniteRouter.get("/", getAllUnites);
uniteRouter.get("/:id", getUniteParId);
uniteRouter.put("/:id", modifierUnite);
uniteRouter.delete("/:id", supprimerUnite);

module.exports = uniteRouter;
