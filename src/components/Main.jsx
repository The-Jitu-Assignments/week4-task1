import React from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Main = ({ todos }) => {
  const currentTodo = (todo) => {
    console.log(todo)
  }
  return (
    <div className='main--container'>
      <div className='list'>
        <TodoList todos={todos} currentTodo={currentTodo} />
      </div>
      <div className='form'>
        <Form todos={todos} />
      </div>
    </div>
  )
}

export default Main