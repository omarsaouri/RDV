const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterSpecialite,
  supprimerSpecialite,
  modifierSpecialite,
  getAllSpecialites,
  getSpecialiteParId,
} = require("../controllers/specialite");

router.use(authMiddleware);

router.post("/", ajouterSpecialite);
router.get("/", getAllSpecialites);
router.get("/:id", getSpecialiteParId);
router.put("/:id", modifierSpecialite);
router.delete("/:id", supprimerSpecialite);

module.exports = router;
