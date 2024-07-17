import React from "react";
import {
  getByTestId,
  getByText,
  render,
  fireEvent,
} from "@testing-library/react";
import TextField from "../TextField";

describe("Check if input field is working properly", () => {
  test("Check if input is rendering", () => {
    const { getByTestId } = render(<TextField />);

    const element = getByTestId("inputfield-testid");
    expect(element).toBeTruthy();
  });

  test("Check if placeholder is correct", () => {
    const val = "Email";
    const { getByPlaceholderText } = render(<TextField placeholder={val} />);

    const element = getByPlaceholderText(val);
    console.log(element);
    expect(element).toBeTruthy();
  });

  test("Check if onchange is being called", () => {
    const onChange = jest.fn();

    const val = "Sneha";
    const { getByTestId } = render(<TextField onChange={onChange} />);
    const element = getByTestId("inputfield-testid");

    fireEvent.change(element, {
      target: { value: val },
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("Check if value is being updated properly onchange", () => {
    const onChange = jest.fn();

    const val = "Sneha";
    const { getByTestId } = render(<TextField onChange={onChange} />);
    const element = getByTestId("inputfield-testid");

    fireEvent.change(element, {
      target: { value: val },
    });
    expect(element).toHaveValue(val);
  });

  test("check if snapshots are matching properly", () => {
    const onChange = jest.fn();
    const text = "Click";

    const { asFragment } = render(<TextField placeholder={text} onChange={onChange} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
