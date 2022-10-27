import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    return localStorage.getItem('todos');
  });

  const addTodo = newTodo => {
    let updatedTodos = todos.push(newTodo)
    localStorage.setItem('todo', updatedTodos);
    setTodos(updatedTodos)
  }

  return [todos, addTodo];
}