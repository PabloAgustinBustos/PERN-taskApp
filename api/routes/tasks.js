const rutas = require("express").Router();
const { createTask } = require("../controllers/tasks");

rutas.post("/", createTask);

module.exports = rutas;