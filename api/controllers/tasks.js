const pool = require("../db");

const getTasks = async (req, res) => {
    const {rows} = await pool.query(`SELECT * FROM tasks`);

    res.status(200).json({
        error: false,
        length: rows.length,
        results: rows
    })
}

const getTask = async (req, res) => {
    const {id} = req.params;

    console.log("id:", id)

    const {rows} = await pool.query(`SELECT * FROM tasks WHERE id = $1`, [id]);

    if(rows.length < 1){
        return res.status(400).json({
            error: true,
            message: "there is no task with id "+ id
        })
    }

    res.status(200).json({
        error: false,
        result: rows[0]
    })
}

const createTask = async (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({
            error: true,
            message: "there is no body"
        })
    }

    const {rowCount} = await pool.query(`INSERT INTO tasks(name) VALUES ($1)`, [name]);

    if(rowCount < 1){
        return res.status(400).json({
            error: true,
            message: "error with de database"
        })
    }

    res.status(200).json({
        error: false,
        message: "task created",
    })
}

module.exports = {
    createTask,
    getTasks,
    getTask
}