const express = require("express");
const agendaRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addAgenda,
  deleteAgenda,
  updateAgenda,
  getAllAgendas,
  getAgendaParId,
} = require("../controllers/agenda");

agendaRouter.use(authMiddleware);

agendaRouter.post("/", addAgenda);
agendaRouter.get("/", getAllAgendas);
agendaRouter.get("/:id", getAgendaParId);
agendaRouter.put("/:id", updateAgenda);
agendaRouter.delete("/:id", deleteAgenda);

module.exports = agendaRouter;
