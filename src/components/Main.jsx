import React from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Main = ({ todos }) => {
  return (
    <div className='main--container'>
      <div className='list'>
        <TodoList todos={todos} />
      </div>
      <div className='form'>
        <Form />
      </div>
    </div>
  )
}

export default Main