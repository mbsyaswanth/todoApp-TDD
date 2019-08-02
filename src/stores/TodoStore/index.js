import TodoItem from "../../Model/todoItem";
import { observable, action } from "mobx";
class TodoStore {
  @observable todos = [];
  @action.bound addTodo(todoDescription) {
    this.todos.push(new TodoItem(todoDescription));
    return this.todos[this.todos.length - 1];
  }

  @action.bound removeTodo(todo) {
    this.todos = this.todos.filter(eachTodo => {
      return eachTodo !== todo;
    });
  }
}

export default TodoStore;
