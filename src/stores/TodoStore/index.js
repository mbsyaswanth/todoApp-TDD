import TodoItem from "../../Model/todoItem";
class TodoStore {
  todos = [];
  addTodo = todoDescription => {
    this.todos.push(new TodoItem(todoDescription));
  };
}

export default TodoStore;
