const { administrateurUniteValidationRules, validateAdministrateurUnite } = require('../validation/adminUniteValidation');

const administrateurUniteMiddleware = [
  administrateurUniteValidationRules(),
  validateAdministrateurUnite
];

module.exports = administrateurUniteMiddleware;
