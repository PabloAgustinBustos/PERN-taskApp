import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { store } from '../App';
import s from "../styles/Tasks.module.css";
import Modal from './Modal';
import Task from './Task';

const Tasks = () => {
    const {tasks} = useContext(store);

    const [current, setCurrent] = useState({
        modal: false,
        id: "00000",
        name: "name test",
        completed: false
    });

    useEffect(() => {
        console.log("se actualizó la lista", tasks);
    }, [tasks]);

    return (
        <div className={s.tasksContainer}>
            {tasks.map(t => {
                console.log(t.name,"=>",t.completed)
                return <Task key={t.id} id={t.id} title={t.name} completed={t.completed} setCurrent={setCurrent}/>
            })}

            {current.modal ? <Modal current={current} setCurrent={setCurrent}/> : null}
        </div>
    )
}

export default Tasks
