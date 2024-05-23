const { body, validationResult } = require('express-validator');

const uniteValidationRules = () => {
  return [
    body('nomUnite').notEmpty().withMessage("Le nom de l'unité est requis"),
    // body('specialites').isArray({ min: 1 }).withMessage("Au moins une spécialité doit être sélectionnée")
  ];
};

const validateUnite = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { uniteValidationRules, validateUnite };
