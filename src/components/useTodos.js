import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));
    return localTodos === null ? [] : localTodos;
  });

  const addTodo = newTodo => {
    todos.push({ ...newTodo });
    localStorage.setItem('todos', JSON.stringify(todos));
    window.dispatchEvent(new Event('storage'));
    setTodos(todos)
  }

  return [todos, addTodo];
}