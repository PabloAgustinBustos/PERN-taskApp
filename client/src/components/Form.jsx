import React from 'react'
import { useState } from 'react';
import s from "../styles/Form.module.css";
import axios from "axios";
import { useContext } from 'react';
import { store } from '../App';

const Form = () => {
    const {getTasks} = useContext(store);
    
    const [taskTitle, setTaskTitle] = useState("");

    const handleChange = e => {
        setTaskTitle(e.target.value);
    }

    const handleClick = async e => {
        e.preventDefault();

        if(taskTitle.length < 1){
            return;
        }

        const res = await axios.post("http://localhost:1337/tasks", {name: taskTitle});

        if(res.data.error){
            console.log("error");
        }else{
            console.log("se agregó la tarea");
        }

        setTaskTitle("");
        getTasks();
    }

    return (
        <div className={s.formContainer}>
            <h2>add a new task</h2>

            <form className={s.form}>
                <input className={s.input} type="text" onChange={handleChange} value={taskTitle} />
                <button className={s.button} onClick={handleClick}>add task</button>
            </form>
        </div>
    )
}

export default Form
