import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <h1>Redux Saga Todo List</h1>
        <AddTodo />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
}

export default App;