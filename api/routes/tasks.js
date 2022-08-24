const rutas = require("express").Router();
const { createTask, getTasks, getTask, updateTask, deleteTask } = require("../controllers/tasks");

rutas.get("/", getTasks)
rutas.get("/:id", getTask);
rutas.post("/", createTask);
rutas.put("/:id", updateTask)
rutas.delete("/:id", deleteTask);

module.exports = rutas;