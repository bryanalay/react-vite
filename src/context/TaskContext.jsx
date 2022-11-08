import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(taskTitle,taskDescription){
        let newTask = {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription
        }
        setTasks([...tasks,newTask]);     
        data.push(newTask);
    }

    function deleteTask(taskId){
        console.log(tasks)
        setTasks(tasks.filter(task => task.id !== taskId))        
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}