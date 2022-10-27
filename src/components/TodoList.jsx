import React from 'react'

const TodoList = () => {
  return (
    <div className='list--box'>
      <div className='todo--header'>
        <div className='todo--searchbar'>
          <input />
        </div>
        <div className='list--priority__box'>
          <div className="list--priority">item1</div>
          <div className="list--priority">item2</div>
          <div className="list--priority">item3</div>
          <div className="list--priority">item4</div>
        </div>
      </div>
      <div className='todo--body'>Todo Body</div>
    </div>
  )
}

export default TodoList