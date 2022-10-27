import { useState } from 'react'
import Button from './Button';
import { useTodos } from './useTodos';
import { faker } from '@faker-js/faker';
import Card from './Card';

// const data = new Array(10).fill().map(() => ({
//   id: faker.datatype.uuid(),
//   title: faker.lorem.words(4),
//   description: faker.lorem.sentences(5),
//   status: prioritiesValues[Math.floor(Math.random() * prioritiesValues.length)]
// }));

const Form = () => {
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
    addTodo({ 
      id: newTodo.id,
      title: newTodo.title,
      description: newTodo.description,
      status: newTodo.status
     });
     window.location.reload(false);
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
      <button onClick={handleSubmit}>
        Submit
      </button>
      {/* <Card todos={filteredArr} /> */}
      {/* <Button className={"form--btn"} text={"Submit"} onClick={() => console.log('clicked')} /> */}
    </div>
  )
}

export default Form