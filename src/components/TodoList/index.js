import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, removeTodo } = this.props.store;
    return (
      <div>
        {todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} remove={removeTodo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
