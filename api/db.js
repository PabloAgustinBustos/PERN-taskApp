const { Pool } = require("pg");

require("dotenv").config({path: `${__dirname}/.env`});
const {
    USER,
    PASSWORD,
    HOST,
    DB_PORT,
    DATABASE
} = process.env

const pool = new Pool({
    user: USER,
    password: PASSWORD,
    host: HOST,
    port: DB_PORT,
    database: DATABASE
});

module.exports = pool;