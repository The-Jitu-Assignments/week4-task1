import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));
    return localTodos === null ? [] : localTodos;
  });

  const addTodo = newTodo => {
    console.log('new', newTodo);
    console.log('todos', todos);
    todos.push({ ...newTodo });
    console.log('todos', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodos(todos)
  }

  return [todos, addTodo];
}