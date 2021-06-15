import React from 'react';
import './search-panel.css';
import ItemStatusBar from '../item-status-filter/';

const SearchPanel = () => {
  return (
    <div className="d-flex align-items-center mb-3">
      <input placeholder="Search..." className="form-control flex-fill "/>
      <ItemStatusBar />
    </div>
  );
};

export default SearchPanel;