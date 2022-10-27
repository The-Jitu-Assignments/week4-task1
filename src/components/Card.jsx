import React from 'react'
import Button from './Button'

const Card = ({ todos }) => {
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
              <Button className={"form--btn"} text={"edit"} />
              <Button className={"form--btn"} text={"delete"} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card