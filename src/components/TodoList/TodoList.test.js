import TodoStore from "../../stores/TodoStore";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import TodoList from "./index";
import TodoItem from "./TodoItem";
import TodoModel from "../../Model/todoItem";

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

  it("should test if delete button deletes the todo item ", () => {
    const item1 = todoStore.addTodo("learn tdd");
    const item2 = todoStore.addTodo("this is a todo");
    jest.spyOn(todoStore, "removeTodo");
    const { getAllByTestId } = render(<TodoList store={todoStore} />);
    window.confirm = jest.fn(() => false);
    const result = getAllByTestId("delete");
    expect(result).toBeDefined();
    fireEvent.click(result[0]);
    expect(todoStore.removeTodo).not.toBeCalledWith(item1);
    fireEvent.click(result[0]);
    window.confirm = jest.fn(() => true);
    expect(todoStore.removeTodo).toBeCalledWith(item1);
    expect(todoStore.todos).toHaveLength(1);
    expect(todoStore.todos[0]).toBe(item2);
  });

  it("should be able to edit todo text on dbclick", () => {
    const item1 = todoStore.addTodo("learn tdd");
    const { getByDisplayValue, getByText, getByTestId } = render(
      <TodoList store={todoStore} />
    );
    let result = getByText("learn tdd");
    fireEvent.dblClick(result);
    result = getByTestId("todoinput");
    fireEvent.change(result, { target: { value: "changed todo" } });
    expect(getByDisplayValue("changed todo")).toBeDefined();
  });

  it("should update the todo in todo list and show it like span element on enter key press", () => {
    const item1 = todoStore.addTodo("learn tdd");
    const { getByDisplayValue, getByText, getByTestId } = render(
      <TodoList store={todoStore} />
    );
    const spy = jest.spyOn(TodoModel.prototype, "editTodo");
    let result = getByText("learn tdd");
    fireEvent.dblClick(result);
    result = getByTestId("todoinput");
    fireEvent.change(result, { target: { value: "changed todo" } });
    fireEvent.keyDown(result, { key: "Enter", code: 13, keyCode: 13 });
    expect(spy).toBeCalledWith("changed todo");
    fireEvent.dblClick(getByText("changed todo"));
    result = getByTestId("todoinput");
    fireEvent.change(result, { target: { value: "  " } });
    fireEvent.keyDown(result, { key: "Enter", code: 13, keyCode: 13 });
    expect(spy).not.toBeCalledWith("  ");
  });
});
