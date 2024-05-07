const express = require("express");
const specialiteRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addSpecialite,
  deleteSpecialite,
  updateSpecialite,
  getAllSpecialites,
  getSpecialiteParId,
} = require("../controllers/specialite");

specialiteRouter.use(authMiddleware);

specialiteRouter.post("/", addSpecialite);
specialiteRouter.get("/", getAllSpecialites);
specialiteRouter.get("/:id", getSpecialiteParId);
specialiteRouter.put("/:id", updateSpecialite);
specialiteRouter.delete("/:id", deleteSpecialite);

module.exports = specialiteRouter;
