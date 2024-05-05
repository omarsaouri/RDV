const express = require("express");
const agendaRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  ajouterAgenda,
  supprimerAgenda,
  modifierAgenda,
  getAllAgendas,
  getAgendaParId,
} = require("../controllers/agenda");

// Apply authentication middleware to all routes
agendaRouter.use(authMiddleware);

// Routes for Agenda
agendaRouter.post("/", ajouterAgenda);
agendaRouter.get("/", getAllAgendas);
agendaRouter.get("/:id", getAgendaParId);
agendaRouter.put("/:id", modifierAgenda);
agendaRouter.delete("/:id", supprimerAgenda);

module.exports = agendaRouter;
