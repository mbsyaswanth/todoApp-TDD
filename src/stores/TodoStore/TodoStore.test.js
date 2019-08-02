import TodoStore from "./index";

describe("TodoStore test cases", () => {
  it("should add todo item to todo list", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("learn tdd");
    expect(todoStore.todos).toHaveLength(1);
  });
});
