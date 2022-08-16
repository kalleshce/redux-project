import React from 'react';
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../../redux/actions/todosActions';
import './Todo.css';

const TodoTask = ({ task, description, id , isCompleted}) => {

  const dispatch = useDispatch();
  return (
    <div key={id} className='todo-container'>
      <div>
        <h2 className='task-name' style={{ textDecoration: isCompleted == true ? 'line-through' : '', color : isCompleted == true ? 'grey' : ''}}>{task}</h2>
        <p className='task-description' style={{ textDecoration: isCompleted == true ? 'line-through' : '', color : isCompleted == true ? 'grey' : ''}}>{description}</p>
      </div>
      <div>
        <button className='btn btn-complete' onClick={() => dispatch(completeTodo(id))}>Complete</button>
        <button className='btn btn-delete' onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </div>
  )
}

export default TodoTask;