import React, { Component } from "react";
import { observer, action } from "mobx";
import { observable } from "mobx-react";

class TodoItem extends Component {
  handleRemove = () => {
    this.props.remove(this.props.todo);
  };

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
        <input
          data-testid="delete"
          onClick={this.handleRemove}
          type="button"
          value="X"
        />
      </div>
    );
  }
}

export default TodoItem;
