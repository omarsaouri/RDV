const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterAdministrateurUnite,
  supprimerAdministrateurUnite,
  modifierAdministrateurUnite,
  getAllAdministrateurUnite,
  getAdministrateurUniteById,
} = require("../controllers/administrateurUnite");

router.use(authMiddleware);

router.post("/", ajouterAdministrateurUnite);
router.get("/", getAllAdministrateurUnite);
router.get("/:id", getAdministrateurUniteById);
router.put("/:id", modifierAdministrateurUnite);
router.delete("/:id", supprimerAdministrateurUnite);

module.exports = router;
