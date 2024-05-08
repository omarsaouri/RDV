const { body } = require('express-validator');

const administrateurUniteValidation = [
  body('nomComplet').notEmpty().withMessage("Le nom complet est requis"),
  body('email').isEmail().withMessage("Veuillez fournir une adresse email valide"),
  body('password').isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  body('idUnite').notEmpty().withMessage("L'unité est requise")
];

module.exports = {administrateurUniteValidation};
