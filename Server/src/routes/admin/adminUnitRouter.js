const express = require("express");
const adminUnitRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addAdministrateurUnite,
  deleteAdministrateurUnite,
  updateAdministrateurUnite,
  getAllAdministrateurUnite,
  getAdministrateurUniteById,
} = require("../controllers/administrateurUnite");

adminUnitRouter.use(authMiddleware);

adminUnitRouter.post("/", addAdministrateurUnite);
adminUnitRouter.get("/", getAllAdministrateurUnite);
adminUnitRouter.get("/:id", getAdministrateurUniteById);
adminUnitRouter.put("/:id", updateAdministrateurUnite);
adminUnitRouter.delete("/:id", deleteAdministrateurUnite);

module.exports = adminUnitRouter;
