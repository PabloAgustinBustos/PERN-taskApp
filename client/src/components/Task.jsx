import React from 'react'
import s from "../styles/Task.module.css";
import {ImCheckboxUnchecked, ImCheckboxChecked} from "react-icons/im";
import {AiOutlineEdit, AiFillEdit, AiOutlineDelete, AiFillDelete} from "react-icons/ai";
import axios from 'axios';
import { useContext } from 'react';
import { store } from '../App';

const Task = ({id, title, completed, setCurrent}) => {
    const {getTasks} = useContext(store);
    
    let isCompleted = completed;

    const deleteTask = async() => {
        await axios.delete("http://localhost:1337/tasks/"+id);
        getTasks();
    }

    return (
        <div className={s.taskContainer}>
            <div className={s.container}>
                <div className={`${s.checkbox} ${isCompleted ? s.green : null}`}>
                    {isCompleted ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                </div>

                <span className={s.title}>{title}</span>

                <div className={s.buttons}>
                    <div className={s.button} onClick={() => setCurrent({id, name: title, completed, modal: true})} id="editButton"><AiFillEdit/></div>
                    <div className={s.button} id="deleteButton" onClick={deleteTask}><AiFillDelete/></div>
                </div>
            </div>
        </div>
    )
}

export default Task
