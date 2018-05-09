import React from "react"
import {observer} from 'mobx-react';

@observer
export default class TodoList extends React.Component {
  setFilter = (e) => {
    this.props.store.filter = e.target.value;
  }
  createNewTodo = (e) => {
    if (e.which === 13) {
      this
        .props
        .store
        .createTodo(e.target.value);
      e.target.value = ""
    }
  }
  toggleComplete = (todo) => {
    todo.complete = !todo.complete
  }

  render() {
    const {todos, filter, filteredTodos, clearComplete} = this.props.store;
    const todoList = filteredTodos.map((todo, index) => <li key={todo.id}>
      <input
        type="checkbox"
        value={todo.complete}
        checked={todo.complete}
        onChange={() => this.toggleComplete(todo)}/> {todo.value}</li>)
    return (
      <div>
        <h1>todos</h1>
        <input className="create" onKeyPress={this.createNewTodo}/>
        <input className="filter" value={filter} onChange={this.setFilter}/>
        <ul>{todoList}</ul>
        <button onClick={clearComplete}>Clear Complete</button>
      </div>
    )
  }
}
