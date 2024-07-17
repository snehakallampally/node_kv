import React from "react";
import { getByTestId, getByText, render,fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Check if button is working",()=>{
test("First", () => {
    const {getByTestId}=render(<Button/>)

    const element=getByTestId("button-test-id");
    console.log

    expect(element).toBeTruthy()
});

test("check if button text content is rendering properly", () => {
const text="Click";

    const {getByText}=render (<Button label={text}/>)

    getByText(text);
});
test("check if nbutton click is working",()=>{
    const onClick=jest.fn();

    const {getByTestId}=render(<Button onClick={onClick}/>);
    const element=getByTestId("button-test-id")

    fireEvent.click(element);

    expect(onClick).toHaveBeenCalled()

});

test("check if snapshots are matching properly",()=>{
    const onClick=jest.fn();
    const text="Click";

    const {asFragment}=render(<Button label={text} onClick={onClick}/>)
    
    expect(asFragment()).toMatchSnapshot();
})
})