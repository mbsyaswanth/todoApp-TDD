import TodoStore from "../../stores/TodoStore";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import TodoList from "./index";
import TodoItem from "./TodoItem";

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

  it("should check and uncheck a todo on toggle", () => {
    const item = todoStore.addTodo("learn tdd");
    jest.spyOn(item, "toggleCompleted");
    const { getByTestId } = render(<TodoItem todo={item} />);
    const result = getByTestId("checkbox");
    expect(item.isCompleted).toBeFalsy();
    fireEvent.click(result);
    expect(item.toggleCompleted).toBeCalledTimes(1);
    expect(item.isCompleted).toBeTruthy();
  });
});
