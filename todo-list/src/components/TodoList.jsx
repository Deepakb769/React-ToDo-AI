import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosRequest, toggleTodoRequest, deleteTodoRequest } from '../redux/actions/todoActions';
import './TodoList.css';

function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error, filter } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const getFilteredTodos = () => {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.length === 0 ? (
        <li className="todo-item empty">No tasks to display</li>
      ) : (
        filteredTodos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => dispatch(toggleTodoRequest(todo.id))}
            >
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTodoRequest(todo.id))}
            >
              ×
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;