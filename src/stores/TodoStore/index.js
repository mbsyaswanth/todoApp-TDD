import TodoItem from "../../Model/todoItem";
class TodoStore {
  todos = [];
  addTodo = todoDescription => {
    this.todos.push(new TodoItem(todoDescription));
  };

  removeTodo = id => {
    this.todos.pop();
  };
}

export default TodoStore;
