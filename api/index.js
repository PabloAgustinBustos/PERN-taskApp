const express = require("express");
const cors = require("cors");
const test = require("./routes/test");
const tasks = require("./routes/tasks");

// .env config
require("dotenv").config({path: `${__dirname}/.env`});
const {SERVER_PORT} = process.env

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/", test);
app.use("/tasks", tasks)

app.listen(SERVER_PORT, () => console.log("server listening on port", SERVER_PORT));