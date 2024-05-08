const express = require("express");
const ajouterAdministrateurUnite = require("../../controllers/administrateurUnite/ajouterAdministrateurUniteController");
const {
  getAllAdministrateurUnite,
} = require("../../controllers/administrateurUnite/getAdministrateurUniteController");
const {
  ajouterAdministrateurUnite,
  supprimerAdministrateurUnite,
  modifierAdministrateurUnite,
  getAllAdministrateurUnite,
  getAdministrateurUniteById,
} = require("../controllers/administrateurUnite");

// adminUnitRouter.use(authMiddleware);

adminUnitRouter.post("/", addAdministrateurUnite);
adminUnitRouter.get("/", getAllAdministrateurUnite);
adminUnitRouter.get("/:id", getAdministrateurUniteById);
adminUnitRouter.put("/:id", modifierAdministrateurUnite);
adminUnitRouter.delete("/:id", supprimerAdministrateurUnite);

module.exports = adminUnitRouter;
