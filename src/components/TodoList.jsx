import Card from './Card';
import { useEffect, useState } from 'react';


const TodoList = ({ todos, currentTodo, setNewTodo, handleDelete, handleEdit, selectedTodo }) => {
  // const selectedTodo = (todo) => {
  //   currentTodo(todo)
  // }
  const [word, setWord] = useState('');
  const [filteredArr, setFilteredArr] = useState(todos);

  useEffect(() => {
    setFilteredArr(() => {
      const newArr = todos
        .filter(item => item.title.includes(word) || item.status.includes(word))
      return newArr
    })
  }, [word])
  
  return (
    <div className='list--box'>
      <div className='todo--header'>
        <div className='todo--searchbar'>
          <input type="search" value={word} onChange={(e) => setWord(e.target.value)} placeholder='Search a todo' />
        </div>
      </div>
      <div className='todo--body'>
        <Card 
          todos={filteredArr} 
          selectedTodo={selectedTodo} 
          setNewTodo={setNewTodo} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}

export default TodoList