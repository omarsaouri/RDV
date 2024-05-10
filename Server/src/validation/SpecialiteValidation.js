const { body, validationResult } = require('express-validator');

const specialiteValidationRules = () => {
  return [
    body('nomSpecialite').notEmpty().withMessage("Le nom de la spécialité est requis"),
    body('agendas').isArray({ min: 1 }).withMessage("Au moins un agenda doit être associé à cette spécialité"),
    body('idUnite').notEmpty().withMessage("L'unité est requise pour cette spécialité")
  ];
};

const validateSpecialite = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { specialiteValidationRules, validateSpecialite };
