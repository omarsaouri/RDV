const express = require("express");
const {
  ajouterSpecialite,
} = require("../../controllers/specialite/ajouterSpecialiteController");
const {
  getAllSpecialites,
  getSpecialiteParId,
} = require("../../controllers/specialite/getSpecialiteController");
const {
  supprimerSpecialite,
} = require("../../controllers/specialite/supprimerSpecialiteController");
const {
  modifierSpecialite,
} = require("../../controllers/specialite/modifierSpecialiteController");
const specialiteRouter = express.Router();

// specialiteRouter.use(authMiddleware);

specialiteRouter.post("/", ajouterSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteParId);
specialiteRouter.put("/:id", modifierSpecialite);
specialiteRouter.delete("/:id", supprimerSpecialite);

module.exports = specialiteRouter;
