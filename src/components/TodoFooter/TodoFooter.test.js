import TodoStore from "../../stores/TodoStore";
import { filters } from "../../constants";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import TodoFooter from "./index";

afterEach(cleanup);
let todoStore;
beforeEach(() => {
  todoStore = new TodoStore();
});

describe("Todo footer", () => {
  it("should set filter according according to the filter selected", () => {
    jest.spyOn(todoStore, "setFilter");
    const { getByDisplayValue } = render(
      <TodoFooter setFilter={todoStore.setFilter} />
    );
    let result = getByDisplayValue("All");
    fireEvent.click(result);
    expect(todoStore.setFilter).toBeCalledWith(filters.all);
    result = getByDisplayValue("Completed");
    fireEvent.click(result);
    expect(todoStore.setFilter).toBeCalledWith(filters.completed);
    result = getByDisplayValue("Active");
    fireEvent.click(result);
    expect(todoStore.setFilter).toBeCalledWith(filters.active);
  });

  it("should test integration of clear todo and active count", () => {
    jest.spyOn(todoStore, "clearCompleted");
    const { getByDisplayValue, getByTestId } = render(
      <TodoFooter setFilter={todoStore.setFilter} />
    );
    expect(getByTestId("todocount")).toBeDefined();
    const result = getByDisplayValue("Clear Completed");
    fireEvent.click(result);
    expect(todoStore.clearCompleted).toBeCalled();
  });
});
