import React from 'react'
import Button from './Button';
import { useTodos } from './useTodos';

const Form = () => {
  const [ todos, addTodo ] = useTodos();
  console.log(todos);
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
      <Button className={"form--btn"} text={"Submit"} />
    </div>
  )
}

export default Form