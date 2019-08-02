import React, { Component } from "react";
import { observer, action } from "mobx";
import { observable } from "mobx-react";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <input
          data-testid="checkbox"
          onChange={todo.toggleCompleted}
          checked={todo.isCompleted}
          type="checkbox"
        />
        <span>{todo.description}</span>
        <input type="button" value="X" />
      </div>
    );
  }
}

export default TodoItem;
