import TodoStore from "./index";
import { filters } from "../../constants";

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
    const todo = todoStore.addTodo("learn tdd");
    todoStore.removeTodo(todo);
    expect(todoStore.todos).toHaveLength(0);
  });

  it("should set the todos filter accordingly as selected by the user (setFilter) and initial value should be all", () => {
    expect(todoStore.filter).toBe(filters.all);
    todoStore.setFilter(filters.active);
    expect(todoStore.filter).toBe(filters.active);
    todoStore.setFilter(filters.completed);
    expect(todoStore.filter).toBe(filters.completed);
    todoStore.setFilter(filters.all);
    expect(todoStore.filter).toBe(filters.all);
  });
});
