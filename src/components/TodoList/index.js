import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  render() {
    const { removeTodo, filteredList } = this.props.store;
    return (
      <div>
        {filteredList.map(todo => {
          return <TodoItem todo={todo} key={todo.id} remove={removeTodo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
