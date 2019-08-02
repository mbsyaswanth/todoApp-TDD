import TodoStore from "../../stores/TodoStore";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import TodoList from "./index";

afterEach(cleanup);
let todoStore;
beforeEach(() => {
  todoStore = new TodoStore();
});

describe("Todo list", () => {
  it("should test if all the entered todos are rendered", () => {
    todoStore.addTodo("learn tdd");
    todoStore.addTodo("this is 2 todo");
    const { getByText } = render(<TodoList store={todoStore} />);
    expect(getByText("learn tdd")).toBeDefined();
    expect(getByText("this is 2 todo")).toBeDefined();
  });
});
