const rutas = require("express").Router();
const { createTask, getTasks, getTask } = require("../controllers/tasks");

rutas.get("/", getTasks)
rutas.get("/:id", getTask);
rutas.post("/", createTask);

module.exports = rutas;