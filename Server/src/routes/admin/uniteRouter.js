const express = require("express");
const uniteRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addUnite,
  deleterUnite,
  updateUnite,
  getAllUnites,
  getUniteParId,
} = require("../controllers/unite");

uniteRouter.use(authMiddleware);

uniteRouter.post("/", addUnite);
uniteRouter.get("/", getAllUnites);
uniteRouter.get("/:id", getUniteParId);
uniteRouter.put("/:id", updateUnite);
uniteRouter.delete("/:id", deleterUnite);

module.exports = uniteRouter;
