const { body, validationResult } = require('express-validator');

const agendaValidationRules = () => {
  return [
    body('nomAgenda').notEmpty().withMessage("Le nom de l'agenda est requis"),
    body('quotaMax').isNumeric().withMessage("Le quota maximum doit être un nombre"),
    body('idSpecialite').notEmpty().withMessage("La spécialité est requise")
  ];
};

const validateAgenda = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { agendaValidationRules, validateAgenda };
