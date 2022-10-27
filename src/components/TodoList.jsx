import Card from './Card';
import { faker } from '@faker-js/faker';
import { useTodos } from './useTodos';
import { useState, useEffect } from 'react';

const prioritiesValues = ['low', 'medium', 'high'];

const data = new Array(10).fill().map(() => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(4),
  description: faker.lorem.sentences(5),
  status: prioritiesValues[Math.floor(Math.random() * prioritiesValues.length)]
}));

const TodoList = () => {
  const [todosList, setTodosList] = useState([]);
  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodosList(todos);
    }
  },[todosList])
  return (
    <div className='list--box'>
      <div className='todo--header'>
        <div className='todo--searchbar'>
          <input type="search" />
        </div>
        <div className='list--priority__box'>
          <div className="list--priority">item1</div>
          <div className="list--priority">item2</div>
          <div className="list--priority">item3</div>
          <div className="list--priority">item4</div>
        </div>
      </div>
      <div className='todo--body'>
        <Card todos={todosList} />
      </div>
    </div>
  )
}

export default TodoList