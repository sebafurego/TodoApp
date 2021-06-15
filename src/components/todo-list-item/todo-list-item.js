import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = { 
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render () {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick={this.onLabelClick}
        >{ label }</span>
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-sm"
          onClick={onDeleted}><i className="fas fa-trash-alt"></i></button>
        <button 
          type="button" 
          className="btn btn-outline-secondary ms-2 btn-sm"
          onClick={this.onMarkImportant}
        ><i className="far fa-lightbulb"></i></button>
      </span>
    );
  };
};