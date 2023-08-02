import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import * as ReactDOM from 'react-dom';
import ButtonWrapper from "./ButtonWrapper";
import { createRoot } from 'react-dom/client';
import { debug } from "console";
 
test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title={"Add"} />);
  const buttonElement = screen.getByText("Add");
   
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(0);
});
 

describe('Login component tests', () => {
    let container: HTMLDivElement
  
    // beforeEach: Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
     // const root = createRoot(container);
      ReactDOM.render(<ButtonWrapper />, container);
      screen.debug(container);
     //root.render(<ButtonWrapper />);
    })
  
    // to clear everything at the end so that tests don't interrupt each other
    afterEach(() => {
      document.body.removeChild(container);
      container.remove();
    })
  
    // Running test to render each input field
    it('Renders all input fields correctly', () => {
        const onClick = jest.fn();
        render(<ButtonWrapper onClick={onClick} title={"Add"} />);
        const buttonElement = screen.getByText("Add")
        fireEvent.click(buttonElement);    
        const strong = container.querySelectorAll('strong');
        
        // Asserting that the input fields are rendered correctly
        expect(strong[0]).toHaveTextContent('0');
    });
  
    
  
  })
  