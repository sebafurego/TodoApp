import React, { Component } from 'react';
import './search-panel.css';
import ItemStatusBar from '../item-status-filter/';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render () {
    return (
      <div className="d-flex align-items-center mb-3">
        <input 
          placeholder="Search..." 
          className="form-control flex-fill "
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <ItemStatusBar />
      </div>
    );
  };
};
