import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter/';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all'

  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  deleteItem = (id) => {
    this.setState( ({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArrey = [ 
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArrey
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState( ({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName]};
      return [ 
        ...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    };
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  filter (items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter( (item) => !item.done);
      case 'done':
        return items.filter( (item) => item.done);
      default:
        return items;
    };
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render () {
    const { todoData, term, filter } = this.state;
    const visibleItem = this.filter(
      this.search(todoData, term), filter
    );
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="container">
        <AppHeader toDo={todoCount} done={doneCount}/>

        <div className="d-flex align-items-center mb-3">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList 
          todos={visibleItem} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
          
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
};
