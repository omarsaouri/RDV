const express = require("express");
const {
  ajouterAgenda,
} = require("../../controllers/agenda/ajouterAgendaController");
const {
  getAllAgendas,
  getAgendaParId,
} = require("../../controllers/agenda/getAgendaController");
const {
  modifierAgenda,
} = require("../../controllers/agenda/modifierAgendaController");
const {
  supprimerAgenda,
} = require("../../controllers/agenda/supprimerAgendaController");
const agendaRouter = express.Router();

// Apply authentication middleware to all routes
// agendaRouter.use(authMiddleware);

// Routes for Agenda
agendaRouter.post("/", ajouterAgenda);
agendaRouter.get("/", getAllAgendas);
agendaRouter.get("/:id", getAgendaParId);
agendaRouter.put("/:id", modifierAgenda);
agendaRouter.delete("/:id", supprimerAgenda);

module.exports = agendaRouter;
