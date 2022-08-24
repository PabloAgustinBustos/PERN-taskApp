import React from 'react'
import s from "../styles/Modal.module.css";
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { store } from '../App';

const Modal = ({current, setCurrent}) => {
    const {getTasks} = useContext(store);

    const [data, setData] = useState({
        id: current.id,
        name: current.name,
        completed: current.completed
    })

    const handleChange = ({target}) => {
        let value = null;

        if(target.id === "name"){
            value = target.value;
        }else{
            value = target.checked;
        }

        setData(prev => ({
            ...prev,
            [target.id]: value
        }))
    }

    const handleClick = async() => {
        if(data.name.length > 0){
            const res = await axios.put("http://localhost:1337/tasks/"+data.id, data);

            setCurrent({modal: false});
            getTasks();
        }

    }

    return (
        <div id="background" className={s.container}>
            <div className={s.modalContainer}>
                <span className={s.close} onClick={() => setCurrent({modal: false})}><AiOutlineClose/></span>
                <h1>edit task</h1>

                <div className={s.data}>
                    <span>Task ID</span>
                    <span>{data.id}</span>
                    <span>name</span>
                    <input id="name" className={s.input} type="text" value={data.name} onChange={handleChange}/>
                    <span>completed</span>
                    <div>
                        <input id="completed" className={s.checkbox} type="checkbox" checked={data.completed} onChange={handleChange}/>
                    </div>
                </div>

                <button className={s.button} onClick={handleClick}>Edit</button>
            </div>
        </div>
    )
}

export default Modal
