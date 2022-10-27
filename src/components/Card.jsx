import React from 'react'
import Button from './Button'

const Card = ({ todos }) => {
  const handleDelete = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    window.location.reload(false) 
  }

  const handleEdit = (id) => {
    let todo = todos.find((item) => item.id === id);
    // handleDelete(id)
    console.log(todo);
    console.log(newTodo);
    setNewTodo(newTodo.todo)
  }
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
              {/* <Button className={"form--btn"} text={"edit"} /> */}
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              {/* <Button className={"form--btn"} text={"delete"} /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card