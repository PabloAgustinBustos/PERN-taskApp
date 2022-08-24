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

const updateTask = async(req, res) => {
    const {id} = req.params;
    const {name, completed} = req.body;

    const {rowCount, rows} = await pool.query(`UPDATE tasks SET name=$1, completed = $2 WHERE id = $3`, [name, completed, id]);

    if(rowCount < 1){
        return res.status(400).json({
            error: true,
            message: "None rows were updated"
        })
    }

    res.status(200).json({
        error: false,
        message: "task updated",
        result: rows[0]
    })
}

const deleteTask = async(req, res) => {
    console.log("entre")
    const {id} = req.params;

    const {rowCount} = await pool.query(`DELETE FROM tasks WHERE id = $1`, [id]);

    if(rowCount < 1){
        return res.status(400).json({
            error: true,
            message: "there is no task with id " + id
        })
    }

    res.status(200).json({
        error: false,
        message: "task deleted"
    })
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}