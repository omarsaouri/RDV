const express = require("express");
const uniteRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterUnite,
  supprimerUnite,
  modifierUnite,
  getAllUnites,
  getUniteParId,
} = require("../controllers/unite");

uniteRouter.use(authMiddleware);

uniteRouter.post("/", ajouterUnite);
uniteRouter.get("/", getAllUnites);
uniteRouter.get("/:id", getAllParId);
uniteRouter.put("/:id", modifierUnite);
uniteRouter.delete("/:id", supprimerUnite);

module.exports = uniteRouter;
