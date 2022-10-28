import { useEffect, useState } from 'react'
import { useTodos } from './useTodos';
import { faker } from '@faker-js/faker';

const Form = ({ todos, selectedTodo }) => {
  console.log(selectedTodo)
  const [ , addTodo ] = useTodos();
  const [newTodo, setNewTodo] = useState({
    id: faker.datatype.uuid(),
    title: '',
    description: '',
    status: '',
  });

  const handleChange = (e) => {
    setNewTodo((newTodo) => ({
      ...newTodo,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = () => {
    if (selectedTodo.id) {
      
    } else {
      addTodo({ 
        id: newTodo.id,
        title: newTodo.title,
        description: newTodo.description,
        status: newTodo.status
      });
    }
     window.location.reload(false)
  };

  useEffect(() => {
    if (selectedTodo) {
      setNewTodo({
        id: selectedTodo.id,
        title: selectedTodo.title,
        description: selectedTodo.description,
        status: selectedTodo.status
      })
    }
  }, [selectedTodo]);

  const resetInput = () => {
    
    setNewTodo({
      title: '',
      description: '',
      status: '',
    })
  }


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
      <button onClick={handleSubmit}>
        Submit
      </button>
      <button type='reset' onClick={resetInput}>Reset</button>
    </div>
  )
}

export default Form