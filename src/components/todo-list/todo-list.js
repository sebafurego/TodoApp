import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

  const elements = todos.map((item) => {
    const {id, ...itemProps } = item;
    return (
      <li key={item.id} className="list-group-item d-flex align-items-center">
        <TodoListItem { ...itemProps } />
        <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-trash-alt"></i></button>
        <button type="button" className="btn btn-outline-secondary ms-2 btn-sm"><i className="far fa-lightbulb"></i></button>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;