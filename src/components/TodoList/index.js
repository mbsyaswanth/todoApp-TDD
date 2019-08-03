import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  render() {
    let id = 0;
    const { removeTodo, filteredList } = this.props.store;
    return (
      <div>
        {filteredList.map(todo => {
          return <TodoItem todo={todo} key={id++} remove={removeTodo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
