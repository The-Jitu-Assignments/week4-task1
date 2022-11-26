import { useEffect, useState } from 'react'
import { useTodos } from './useTodos';

const Form = ({ todos, selectedTodo, newTodo, setNewTodo, fetched }) => {
  console.log(selectedTodo)
  const [ _, addTodo ] = useTodos();

  const handleChange = (e) => {
    setNewTodo((newTodo) => ({
      ...newTodo,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = () => {
    if (selectedTodo.id) {
      console.log(selectedTodo)
      console.log(newTodo);
      let existingData = JSON.parse(localStorage.getItem('todos'));
      existingData = existingData ? existingData : [];
      existingData.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(existingData));
      window.location.reload(true); 
    } else { 
      addTodo({ 
        id: newTodo.id,
        title: newTodo.title,
        description: newTodo.description,
        status: newTodo.status
      });
      window.location.reload(false)
    }
  };


  return (
    <div className='form--box'>
      <div className='form--details'>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          placeholder='Enter todo title' 
          name='title' 
          value={newTodo.title} 
          onChange={handleChange} 
        />
      </div>
      <div className='form--details'>
        <label htmlFor="description">Title</label>
        <textarea 
          placeholder='Enter todo description'
          name='description'
          value={newTodo.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className='form--details'>
        <label htmlFor='status'></label>
        <select id="" name="status" onChange={handleChange} value={newTodo.status}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form--btns__container">
        <button onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form