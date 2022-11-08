import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext';

export const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createTask(title, description);
        setTitle('');
        setDescription('');
    }


    return (
        <div className="max-h-md mx-32 bg-gray-700 rounded-md">
            <form className="p-10 mb-4" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-white pb-4 font-bold mb-3">Crea tu tarea</h1>
            <input className="rounded-xl bg-blue-200 p-3 w-full mb-2" type="text" placeholder="Write a task" 
            onChange={(e)=> setTitle(e.target.value)} value={title} autoFocus/>
            <br/>
            <br/>
            <textarea className="rounded-xl bg-blue-200 p-3 w-full mb-2" onChange={(e) =>{setDescription(e.target.value)}} placeholder="Escribe una descripcion" value={description}></textarea>
            <button className="bg-blue-200 rounded-xl mt-3 w-24 ">Save</button>
        </form>
        </div>
    )
}