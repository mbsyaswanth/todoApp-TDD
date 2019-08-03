import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  @observable todoDesc = this.props.todo.description;
  @observable isClicked = false;
  handleRemove = () => {
    this.props.remove(this.props.todo);
  };

  @action.bound handleDoubleClick(event) {
    this.isClicked = true;
  }

  @action.bound handleInputChange(event) {
    this.todoDesc = event.target.value;
  }

  changeTodo = event => {
    if (event.keyCode === 13) {
      this.isClicked = false;
      this.props.todo.editTodo(this.todoDesc);
    }
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
        {this.isClicked ? (
          <input
            data-testid="todoinput"
            value={this.todoDesc}
            onChange={this.handleInputChange}
            onKeyDown={this.changeTodo}
          />
        ) : (
          <span onDoubleClick={this.handleDoubleClick}>{this.todoDesc}</span>
        )}
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
