import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

{/* Componente donde se hace el ensayo de la tarea y se le manda por Props a Task.js 
lo que queremos que renderice */}

const TaskListComponent = ({ task }) => {

    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log('Todo: cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>
                Your task: 
                </h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
