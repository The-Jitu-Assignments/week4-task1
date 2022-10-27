import { useState } from 'react'
import Button from './Button';
import { useTodos } from './useTodos';

const Form = () => {
  const [ todos, addTodo ] = useTodos();
  const [newTodo, setNewTodo] = useState({
    id: 1,
    title: 'new Todo',
    description: 'blah blah',
    status: 'low',
  });

  const handleSubmit = () => {
    console.log('data added');
    addTodo({ 
      id: newTodo.id,
      title: newTodo.title,
      description: newTodo.description,
      status: newTodo.status
     });
  };
  return (
    <div className='form--box'>
      <div className='form--details'>
        <label htmlFor="title">Title</label>
        <input type="text" placeholder='Enter todo title' />
      </div>
      <div className='form--details'>
        <label htmlFor="description">Title</label>
        <textarea placeholder='Enter todo description'></textarea>
      </div>
      <div className='form--details'>
        <label htmlFor='priorities'></label>
        <select name="priorities" id="">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      {/* <Button className={"form--btn"} text={"Submit"} onClick={() => console.log('clicked')} /> */}
    </div>
  )
}

export default Form