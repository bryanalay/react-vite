import { TaskCard} from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Tasklist = () => {

    const {tasks} = useContext(TaskContext);

    if(tasks.length ===0){
        return <h1 className='text-yellow-50 text-4xl font-bold text-center'>No hay ninguna tarea</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {tasks.map((task) =>(
                <TaskCard key={task.id} task={task}/>
            ))}
            
        </div>
        
    )
}

export default Tasklist;