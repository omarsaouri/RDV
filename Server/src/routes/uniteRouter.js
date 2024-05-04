const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterUnite,
  supprimerUnite,
  modifierUnite,
  getAllUnites,
  getUniteParId,
} = require("../controllers/unite");

router.use(authMiddleware);

router.post("/", ajouterUnite);
router.get("/", getAllUnites);
router.get("/:id", getAllParId);
router.put("/:id", modifierUnite);
router.delete("/:id", supprimerUnite);

module.exports = router;
