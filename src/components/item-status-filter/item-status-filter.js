import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group ms-3" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-outline-secondary active">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Dove</button>
    </div>
  );
};

export default ItemStatusFilter;