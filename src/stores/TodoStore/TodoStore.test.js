import TodoStore from "./index";

let todoStore;
beforeEach(() => {
  todoStore = new TodoStore();
});

describe("TodoStore test cases", () => {
  it("should add todo item to todo list", () => {
    todoStore.addTodo("learn tdd");
    expect(todoStore.todos).toHaveLength(1);
    expect(todoStore.todos[0].description).toBe("learn tdd");
  });

  it("should remove the added todo from todos (removeTodo)", () => {
    todoStore.addTodo("learn tdd");
    todoStore.removeTodo();
    expect(todoStore.todos).toHaveLength(0);
  });
});
