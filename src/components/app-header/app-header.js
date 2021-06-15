import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
    <div className="d-flex  align-items-end mb-2 justify-content-between mt-4">
      <h2>Todo App</h2>
      <h6 className="text-secondary">1 more todo, 3 done</h6>
    </div>
  );
};

export default AppHeader;