import React, { useEffect } from 'react'
import Button from './Button'

const Card = ({ todos, selectedTodo, setNewTodo, handleDelete, handleEdit }) => {

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