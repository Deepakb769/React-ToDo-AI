import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/todoActions';
import './FilterButtons.css';

function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);

  return (
    <div className="filter-buttons">
      <button
        className={filter === 'ALL' ? 'active' : ''}
        onClick={() => dispatch(setFilter('ALL'))}
      >
        All
      </button>
      <button
        className={filter === 'ACTIVE' ? 'active' : ''}
        onClick={() => dispatch(setFilter('ACTIVE'))}
      >
        Active
      </button>
      <button
        className={filter === 'COMPLETED' ? 'active' : ''}
        onClick={() => dispatch(setFilter('COMPLETED'))}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
