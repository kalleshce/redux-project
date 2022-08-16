import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todosActions';
import './AddToDo.css';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch()

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className='add-task-container'>
      <div className='task-title'>
        <h1> My Todos</h1>
      </div>
      <div className='task-container'>
        <div className='add-task'>
          <label>Name</label>
          <input type={'text'} value={task} onChange={handleTask} />
        </div>
        <div className='add-description'>
          <label>Description</label>
          <input type={'text'} value={description} onChange={handleDescription} />
        </div>
        <div>
          <button className='btn-addtask' onClick={() => dispatch(addTodo({ task, description }))}>AddTodo</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;