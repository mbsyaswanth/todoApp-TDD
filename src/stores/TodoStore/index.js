import TodoItem from "../../Model/todoItem";
class TodoStore {
  todos = [];
  addTodo = todoDescription => {
    this.todos.push(new TodoItem(todoDescription));
    return this.todos[this.todos.length - 1];
  };

  removeTodo = id => {
    this.todos = this.todos.filter(item => {
      return item.id !== id;
    });
  };
}

export default TodoStore;
