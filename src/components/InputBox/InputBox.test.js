import TodoStore from "../../stores/TodoStore";
import { filters } from "../../constants";
import { render } from "@testing-library/react";
import React from "react";

describe("InputBox component test cases ", () => {
  it("should check whether inputbox component exists ", () => {
    const { getByPlaceholderText } = render(<InputBox />);
    const result = getByPlaceholderText("what needs to be done ?");
    expect(result).toBeDefined();
  });
});
