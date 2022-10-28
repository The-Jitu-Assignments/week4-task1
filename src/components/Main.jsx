import { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Main = ({ todos }) => {
  const [selectedTodo, setSelectedTodo] = useState({});
  const currentTodo = (todo) => {
    setSelectedTodo(todo)
  }
  return (
    <div className='main--container'>
      <div className='list'>
        <TodoList todos={todos} currentTodo={currentTodo} />
      </div>
      <div className='form'>
        <Form todos={todos} selectedTodo={selectedTodo} />
      </div>
    </div>
  )
}

export default Main