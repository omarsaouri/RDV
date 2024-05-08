const express = require("express");
const {
  ajouterSpecialite,
  supprimerSpecialite,
  modifierSpecialite,
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

specialiteRouter.post("/", addSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteParId);
specialiteRouter.put("/:id", updateSpecialite);
specialiteRouter.delete("/:id", deleteSpecialite);

module.exports = specialiteRouter;
