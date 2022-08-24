const rutas = require("express").Router();
const {test} = require("../controllers/test.js");

rutas.get("/", test)

module.exports = rutas