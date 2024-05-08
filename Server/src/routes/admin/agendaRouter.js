const express = require("express");
const {
  ajouterAgenda,
  supprimerAgenda,
  modifierAgenda,
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
agendaRouter.use(authMiddleware);

agendaRouter.post("/", addAgenda);
agendaRouter.get("/", getAllAgendas);
agendaRouter.get("/:id", getAgendaParId);
agendaRouter.put("/:id", updateAgenda);
agendaRouter.delete("/:id", deleteAgenda);

module.exports = agendaRouter;
