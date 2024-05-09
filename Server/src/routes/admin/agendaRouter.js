const express = require("express");
const ajouterAgenda = require("../../controllers/agenda/addAgendaController");
const {
  getAllAgendas,
  getAgendaParId,
} = require("../../controllers/agenda/getAgendaController");
const modifierAgenda = require("../../controllers/agenda/updateAgendaController");
const supprimerAgenda = require("../../controllers/agenda/deleteAgendaController");

const agendaRouter = express.Router();

// Apply authentication middleware to all routes

agendaRouter.post("/", ajouterAgenda);
agendaRouter.get("/", getAllAgendas);
agendaRouter.get("/:id", getAgendaParId);
agendaRouter.put("/:id");
agendaRouter.delete("/:id", supprimerAgenda);

module.exports = agendaRouter;
