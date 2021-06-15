import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

  const elements = todos.map((item) => {
    const {id, ...itemProps } = item;
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group">
      {elements}
    </ul>
  );
};

export default TodoList;