const { specialiteValidationRules, validateSpecialite } = require('../Validation/SpecialiteValidation');

const specialiteMiddleware = [
  specialiteValidationRules(),
  validateSpecialite
];

module.exports = specialiteMiddleware;
