import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

export const TaskCard = ({task}) => {

    const { deleteTask } = useContext(TaskContext);

    return(
        <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 rounded-md px-2 py-1 mt-3 cursor-pointer hover:bg-red-400' onClick={() => deleteTask(task.id)}>
            Eliminar {task.title}</button>
        </div>
    )
}