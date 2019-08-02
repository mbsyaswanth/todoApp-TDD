import React, { Component } from "react";
import { observer, action } from "mobx";
import { observable } from "mobx-react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <input
          data-testid="checkbox"
          onChange={this.props.todo.toggleCompleted}
          checked={this.props.todo.isCompleted}
          type="checkbox"
        />
        <span>{this.props.todo.description}</span>
        <input type="button" value="X" />
      </div>
    );
  }
}

export default TodoItem;
