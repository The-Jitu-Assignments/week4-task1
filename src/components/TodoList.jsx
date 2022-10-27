import Card from './Card';
import { useEffect, useState } from 'react';


const TodoList = ({ todos }) => {
  const [word, setWord] = useState('');
  const [filteredArr, setFilteredArr] = useState(todos);

  useEffect(() => {
    setFilteredArr(() => {
      const newArr = todos
        .filter(item => item.title.includes(word))
      return newArr
    })
  }, [word])
  
  return (
    <div className='list--box'>
      <div className='todo--header'>
        <div className='todo--searchbar'>
          <input type="search" value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
        {/* <div className='list--priority__box'>
          <div className="list--priority">item1</div>
          <div className="list--priority">item2</div>
          <div className="list--priority">item3</div>
          <div className="list--priority">item4</div>
        </div> */}
      </div>
      <div className='todo--body'>
        <Card todos={filteredArr} />
      </div>
    </div>
  )
}

export default TodoList