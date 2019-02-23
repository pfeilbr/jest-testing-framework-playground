import React from "react";
import MyComponent from "./MyComponent";
import * as renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import { render, fireEvent } from "react-testing-library";

test("MyComponent works", async () => {
  const component = renderer.create(<MyComponent title="Hello World" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const { getByText, getByLabelText } = render(
    <MyComponent title="Hello World" />
  );
  expect(getByText(/hello/i)).toHaveTextContent("Hello World");

  fireEvent.click(getByText(/click/i));
  expect(document.querySelector("[name=count]")).toHaveAttribute("value", "1");
});
