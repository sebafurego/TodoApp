import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'}
  ]
  render () {
    const {filter, onFilterChange} = this.props;
    
    const buttons = this.buttons.map(({ name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? ' active' : '';
      return <button 
        key={name} 
        type="button" 
        className={`btn btn-outline-secondary ${clazz}`}
        onClick={() => onFilterChange(name)}>{label}</button>
    });

    return (
      <div className="btn-group ms-3" role="group" aria-label="Basic example">
        {buttons}
      </div>
    );
  };
};