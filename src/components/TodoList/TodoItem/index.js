import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <input data-testid="checkbox" type="checkbox" />
        <span>{this.props.todo.description}</span>
        <input type="button" value="X" />
      </div>
    );
  }
}

export default TodoItem;
