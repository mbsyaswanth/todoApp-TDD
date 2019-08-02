class TodoStore {
  todos = [];
  addTodo = todoDescription => {
    this.todos.push(todoDescription);
  };
}

export default TodoStore;
