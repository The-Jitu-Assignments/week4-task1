import React, { useEffect } from 'react'
import Button from './Button'

const Card = ({ todos, selectedTodo, setNewTodo, handleDelete, handleEdit }) => {
  // const handleDelete = (id) => {
  //   todos = todos.filter((todo) => todo.id !== id);
  //   localStorage.setItem('todos', JSON.stringify(todos));
  //   window.location.reload(true); 
  // }

  // const handleEdit = (id) => {
  //   let todo = todos.find((item) => item.id === id);
  //   selectedTodo(todo);
  //   setNewTodo({
  //     id: todo.id,
  //     title: todo.title,
  //     description: todo.description,
  //     status: todo.status
  //   })
  // }

  
  return (
    <div className='card'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className='card--header'>
              <h2>
                {todo.title}
              </h2>
              <Button className={"form--btn"} text={todo.status} />
            </div>
            <div>
              {todo.description}
            </div>
            <div className='card--btns'>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card