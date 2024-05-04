const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterAgenda,
  supprimerAgenda,
  modifierAgenda,
  getAllAgendas,
  getAgendaParId,
} = require("../controllers/agenda");

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Routes for Agenda
router.post("/", ajouterAgenda);
router.get("/", getAllAgendas);
router.get("/:id", getAgendaParId);
router.put("/:id", modifierAgenda);
router.delete("/:id", supprimerAgenda);

module.exports = router;
