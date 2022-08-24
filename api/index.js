const express = require("express");
const cors = require("cors");
const test = require("./routes/test");

// .env config
require("dotenv").config({path: `${__dirname}/.env`});
const {SERVER_PORT} = process.env

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("task manager app")
})

// routes
app.use("/", test)

app.listen(SERVER_PORT, () => console.log("server listening on port", SERVER_PORT));