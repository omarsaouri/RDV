const express = require("express");
const specialiteRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterSpecialite,
  supprimerSpecialite,
  modifierSpecialite,
  getAllSpecialites,
  getSpecialiteParId,
} = require("../controllers/specialite");

specialiteRouter.use(authMiddleware);

specialiteRouter.post("/", ajouterSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteParId);
specialiteRouter.put("/:id", modifierSpecialite);
specialiteRouter.delete("/:id", supprimerSpecialite);

module.exports = specialiteRouter;
