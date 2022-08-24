import { createContext, useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import axios from "axios";

export const store = createContext();
function App() {

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:1337/tasks");

    setTasks(res.data.results);
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <store.Provider value={{tasks, setTasks, getTasks}}>
      <div className="App">
        <div className="app-container">
          <Form/>
          <div className="tasks-container">
            <Tasks/>
          </div>
        </div>
      </div>
    </store.Provider>
  );
}

export default App;
