import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  render () {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add todo item text..." />
        <button 
          className="btn btn-outline-secondary" 
          type="button"
          onClick={() => this.props.onItemAdded('Hellow World')}>Add Item</button>
      </div>
    );
  };
};