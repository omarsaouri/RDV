const { agendaValidationRules, validateAgenda } = require('../Validation/agendaValidation');

const agendaMiddleware = [
  agendaValidationRules(),
  validateAgenda
];

module.exports = agendaMiddleware;
