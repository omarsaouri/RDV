const express = require("express");
const addUnite = require("../../controllers/unite/addUniteController");
const getAllUnites = require("../../controllers/unite/getAllUnitesController");
const getUniteById = require("../../controllers/unite/getUniteByIdController");
const updateUnite = require("../../controllers/unite/updateUniteController");
const deleteUnite = require("../../controllers/unite/deleteUniteController");
const uniteMiddleware = require("../../Middlewares/uniteMiddleware");


const uniteRouter = express.Router();

uniteRouter.post("/",uniteMiddleware, addUnite);
uniteRouter.get("/", getAllUnites);
uniteRouter.get("/:id", getUniteById);
uniteRouter.put("/:id", uniteMiddleware,updateUnite);
uniteRouter.delete("/:id", deleteUnite);

module.exports = uniteRouter;
