import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render () {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = 'todo-list-item d-flex align-items-center';

    if (done) {
      classNames += ' done';
    };
    if (important) {
      classNames += ' important';
    };

    return (
      <span 
        className={ classNames }
      >
        <span 
          className="flex-fill"
          onClick={onToggleDone}
        >{ label }</span>
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-sm"
          onClick={onDeleted}><i className="fas fa-trash-alt"></i></button>
        <button 
          type="button" 
          className="btn btn-outline-secondary ms-2 btn-sm"
          onClick={onToggleImportant}
        ><i className="far fa-lightbulb"></i></button>
      </span>
    );
  };
};