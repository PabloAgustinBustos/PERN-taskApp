const rutas = require("express").Router();
const { createTask, getTasks, getTask, updateTask } = require("../controllers/tasks");

rutas.get("/", getTasks)
rutas.get("/:id", getTask);
rutas.post("/", createTask);
rutas.put("/:id", updateTask)

module.exports = rutas;