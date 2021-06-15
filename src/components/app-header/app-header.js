import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="d-flex  align-items-end mb-2 justify-content-between mt-4">
      <h2>Todo App</h2>
      <h6 className="text-secondary">{toDo} more todo, {done} done</h6>
    </div>
  );
};

export default AppHeader;