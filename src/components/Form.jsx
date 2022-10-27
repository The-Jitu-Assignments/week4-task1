import React from 'react'

const Form = () => {
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
      <button>Submit</button>
    </div>
  )
}

export default Form