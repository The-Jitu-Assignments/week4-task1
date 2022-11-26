import { useEffect, useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';
import { faker } from '@faker-js/faker';

const Main = ({ todos }) => {
  const [selectedTodo, setSelectedTodo] = useState({});
  // const currentTodo = (todo) => {
  //   setSelectedTodo(todo)
  // }

  const [newTodo, setNewTodo] = useState({
    id: faker.datatype.uuid(),
    title: '',
    description: '',
    status: '',
  });

  const handleDelete = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos))
    window.location.reload(true); 
  }

  const handleEdit = (id) => {
    let todo = todos.find((item) => item.id === id)
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos))
    setSelectedTodo(todo)
    setNewTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: todo.status
    })
  }

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

  // const handleDelete = (id) => {
  //   todos = todos.filter((todo) => todo.id !== id);
  //   localStorage.setItem('todos', JSON.stringify(todos));
  //   window.location.reload(true); 
  // }
  // useEffect(() => {
  //   if (fetched) {
  //     todos = JSON.parse(localStorage.getItem('todos'));
  //   }

  //   return () => {
  //     fetched = false
  //   }
  // }, [fetched])

  return (
    <div className='main--container'>
      <div className='list'>
        <TodoList 
          todos={todos} 
          selectedTodo={selectedTodo}
          // currentTodo={currentTodo} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <div className='form'>
        <Form 
          todos={todos} 
          selectedTodo={selectedTodo} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo} 
        />
      </div>
    </div>
  )
}

export default Main