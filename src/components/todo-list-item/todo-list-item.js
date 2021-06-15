import React from 'react';
import './todo-list-item.css';

const TodoListItem = ( { label, important = false } ) => {
  const style = {
    color: important ? 'red' : 'black'
  };
  return (
    <span 
      className="todo-list-item flex-fill" 
      style={style}
    >
      { label }
    </span>
  );
};

export default TodoListItem;