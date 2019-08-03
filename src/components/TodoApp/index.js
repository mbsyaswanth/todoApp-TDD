import React, { Component } from "react";
import InputBox from "../InputBox";
import TodoList from "../TodoList";
import TodoStore from "../../stores/TodoStore";
import TodoFooter from "../TodoFooter";
import { observer } from "mobx-react";

const store = new TodoStore();

@observer
class TodoApp extends Component {
  render() {
    return (
      <div>
        <InputBox submit={store.addTodo} />
        <TodoList store={store} />
        <TodoFooter
          setFilter={store.setFilter}
          count={store.activeCount}
          clearCompleted={store.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoApp;
