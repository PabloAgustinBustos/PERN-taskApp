const rutas = require("express").Router();
const { createTask, getTasks } = require("../controllers/tasks");

rutas.get("/", getTasks)
rutas.post("/", createTask);

module.exports = rutas;