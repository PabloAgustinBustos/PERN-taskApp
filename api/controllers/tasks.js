const pool = require("../db");

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
    createTask
}