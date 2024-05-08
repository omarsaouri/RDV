const express = require("express");
const ajouterAdministrateurUnite = require("../../controllers/administrateurUnite/ajouterAdministrateurUniteController");
const {
  getAllAdministrateurUnite,
} = require("../../controllers/administrateurUnite/getAdministrateurUniteController");
const {
  modifierAdministrateurUnite,
} = require("../../controllers/administrateurUnite/modifierAdministrateurUniteController");
const supprimerAdministrateurUniteController = require("../../controllers/administrateurUnite/supprimerAdministrateurUniteController");
const adminUnitRouter = express.Router();

// const {
//   ajouterAdministrateurUnite,
//   supprimerAdministrateurUnite,
//   modifierAdministrateurUnite,
//   getAllAdministrateurUnite,
//   getAdministrateurUniteById,
// } = require("../../controllers/administrateurUnite");

// adminUnitRouter.use(authMiddleware);

adminUnitRouter.post("/", ajouterAdministrateurUnite);
adminUnitRouter.get("/", getAllAdministrateurUnite);
adminUnitRouter.get("/:id", getAllAdministrateurUnite);
adminUnitRouter.put("/:id", modifierAdministrateurUnite);
adminUnitRouter.delete("/:id", supprimerAdministrateurUniteController);

module.exports = adminUnitRouter;
