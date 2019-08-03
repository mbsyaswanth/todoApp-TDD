import TodoStore from "../../stores/TodoStore";
import { filters } from "../../constants";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import InputBox from "./index";

afterEach(cleanup);

describe("InputBox component test cases ", () => {
  it("should check whether inputbox component exists ", () => {
    const { getByPlaceholderText } = render(<InputBox />);
    const result = getByPlaceholderText("what needs to be done ?");
    expect(result).toBeDefined();
  });

  it("should add entered todo to the store", () => {
    const store = new TodoStore();
    const spyfunc = jest.spyOn(store, "addTodo");
    const { getByPlaceholderText } = render(
      <InputBox submit={store.addTodo} />
    );
    const result = getByPlaceholderText("what needs to be done ?");
    fireEvent.change(result, { target: { value: "a test entry" } });
    fireEvent.keyDown(result, { key: "Enter", code: 13, keyCode: 13 });
    expect(result.value).toBe("");
    expect(spyfunc).toBeCalledWith("a test entry");
    expect(store.todos[0].description).toBe("a test entry");
  });
  it("should not sumbit empty input", () => {
    const store = new TodoStore();
    const spyfunc = jest.spyOn(store, "addTodo");
    const { getByPlaceholderText } = render(
      <InputBox submit={store.addTodo} />
    );
    const result = getByPlaceholderText("what needs to be done ?");
    fireEvent.change(result, { target: { value: "" } });
    fireEvent.keyDown(result, { key: "Enter", code: 13, keyCode: 13 });
    expect(result.value).toBe("");
    expect(spyfunc).not.toBeCalledWith("");
    expect(store.todos.length).toBe(0);
  });
});
