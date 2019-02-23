import React from "react";
import MyComponent from "./MyComponent";
import * as renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  getByText
} from "react-testing-library";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<MyComponent title="Hello World" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const { getByText } = render(<MyComponent title="Hello World" />);

  expect(getByText(/hello/i)).toHaveTextContent("Hello World");
});
