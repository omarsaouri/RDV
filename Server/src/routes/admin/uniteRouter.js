const express = require("express");
const {
  ajouterUnite,
  supprimerUnite,
  modifierUnite,
  getAllUnites,
  getUniteParId,
} = require("../../controllers/unite/getUniteController");
const {
  modifierUnite,
} = require("../../controllers/unite/modifierUniteController");
const {
  supprimerUnite,
} = require("../../controllers/unite/supprimerUniteController");
const {
  ajouterUnite,
} = require("../../controllers/unite/ajouterUniteController");
const uniteRouter = express.Router();

// uniteRouter.use(authMiddleware);

uniteRouter.post("/", addUnite);
uniteRouter.get("/", getAllUnites);
uniteRouter.get("/:id", getAllParId);
uniteRouter.put("/:id", modifierUnite);
uniteRouter.delete("/:id", supprimerUnite);

module.exports = uniteRouter;
