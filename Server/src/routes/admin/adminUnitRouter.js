const express = require("express");
const adminUnitRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterAdministrateurUnite,
  supprimerAdministrateurUnite,
  modifierAdministrateurUnite,
  getAllAdministrateurUnite,
  getAdministrateurUniteById,
} = require("../controllers/administrateurUnite");

adminUnitRouter.use(authMiddleware);

adminUnitRouter.post("/", ajouterAdministrateurUnite);
adminUnitRouter.get("/", getAllAdministrateurUnite);
adminUnitRouter.get("/:id", getAdministrateurUniteById);
adminUnitRouter.put("/:id", modifierAdministrateurUnite);
adminUnitRouter.delete("/:id", supprimerAdministrateurUnite);

module.exports = adminUnitRouter;
