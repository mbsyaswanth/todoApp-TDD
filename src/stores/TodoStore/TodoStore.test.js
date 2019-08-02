import TodoStore from "./index";
import { filters } from "../../constants";
import { render } from "@testing-library/react";
import React from "react";

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

  it("should return the filtered todos according to the filter set", () => {
    todoStore.addTodo("item 1");
    todoStore.addTodo("item 2");
    todoStore.addTodo("item 3");
    expect(todoStore.filteredList).toHaveLength(3);
    todoStore.todos[0].isCompleted = true;
    expect(todoStore.filteredList).toHaveLength(3);
    todoStore.setFilter(filters.completed);
    expect(todoStore.filteredList).toHaveLength(1);
    todoStore.setFilter(filters.active);
    expect(todoStore.filteredList).toHaveLength(2);
  });

  it("should test whether toggleCompleted of model works", () => {
    todoStore.addTodo("item 1");
    todoStore.todos[0].toggleCompleted();
    expect(todoStore.todos[0].isCompleted).toBeTruthy();
    todoStore.todos[0].toggleCompleted();
    expect(todoStore.todos[0].isCompleted).toBeFalsy();
  });

  it("should test whether edit todo function is able to edit the todo", () => {
    todoStore.addTodo("this is a todo");
    todoStore.todos[0].editTodo("this is edited");
    expect(todoStore.todos[0].description).toBe("this is edited");
  });
});
