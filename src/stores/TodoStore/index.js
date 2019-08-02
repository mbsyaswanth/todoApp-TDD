import todoItem from "../../Model/todoItem";
class TodoStore {
  todos = [];
  addTodo = todoDescription => {
    this.todos.push(new todoItem(todoDescription));
  };
}

export default TodoStore;
