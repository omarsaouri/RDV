const { uniteValidationRules, validateUnite } = require('../Validation/uniteValidation');

const uniteMiddleware = [
  uniteValidationRules(),
  validateUnite
];

module.exports = uniteMiddleware;
