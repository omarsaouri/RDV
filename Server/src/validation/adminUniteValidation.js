const { body, validationResult } = require('express-validator');

const administrateurUniteValidationRules = () => {
  return [
    body('nomComplet').notEmpty().withMessage("Le nom complet est requis"),
    body('email').isEmail().withMessage("Veuillez fournir une adresse email valide"),
    body('password').isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    body('idUnite').notEmpty().withMessage("L'unité est requise")
  ];
};

const validateAdministrateurUnite = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { administrateurUniteValidationRules, validateAdministrateurUnite };
