const express = require('express');
const addAgenda = require('../../controllers/agenda/addAgendaController');
const updateAgenda = require('../../controllers/agenda/updateAgendaController');
const getAllAgendas = require('../../controllers/agenda/getAllAgendasController');
const getAgendaById = require('../../controllers/agenda/getAgendaParIdController');
const deleteAgenda = require('../../controllers/agenda/deleteAgendaController');
const agendaMiddleware = require('../../Middlewares/agendaMiddleware');

const agendaRouter = express.Router();

agendaRouter.post('/', agendaMiddleware, addAgenda);
agendaRouter.get('/', getAllAgendas);
agendaRouter.get('/:id', getAgendaById);
agendaRouter.put('/:id', agendaMiddleware, updateAgenda);
agendaRouter.delete('/:id', deleteAgenda);

module.exports = agendaRouter;
