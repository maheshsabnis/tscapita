/* Import Necessary Objects to Execute Test Successfully */

import React from "react";
import * as ReactDOM from 'react-dom';
import { fireEvent, render, screen } from "@testing-library/react";

import LoginComponent from "./logincomponent";


describe('React Component Testing',()=>{
    /* The Configuration That will be executed before each Test */
    let domContainer: HTMLDivElement;
    // React 18+
    const setup = () => render(<LoginComponent />);
   beforeEach(()=>{
        // 1. Set the div as root
        domContainer = document.createElement('div');
        // 2. append the domContaier in the document (In-Memory)
        document.body.appendChild(domContainer);
        // 3. Render in React 17
        ReactDOM.render(<LoginComponent/>,domContainer)
    });

    /*  The Code to clear all allocations in test when the test is over */

    afterEach(()=>{});

    /* The Test case */
    test('render all input elements correctly React 18 Type Test',()=>{
        // 1. render
        setup();
        console.log(setup().container.innerHTML);
        // 2. Read all inputs
        const inputEmail =  screen.queryAllByPlaceholderText('Enter Email');
        // 3. check if it is present on screen
       // expect(inputEmail[0].name).toBe('email');
    });

    test('make sure that 2 buttons are rendered React 17 Type Test',()=>{
        // 1. React all button tags from the DOM
        const buttons = domContainer.querySelectorAll('button');

        // 2. Check if 2 buttons are present
        expect(buttons).toHaveLength(2);

    });

    test('make sure that 2 buttons are for Login and Register',()=>{
        // 1. React all button tags from the DOM
        const buttons = domContainer.querySelectorAll('button');

        // 2. Check if the Login Button Exist
        expect(buttons[0].innerHTML).toBe('Login');
        // 3. Check if the Register Button Exist
        expect(buttons[1].innerHTML).toBe('Register');
    });

    test('the login button click must show email address in Email input element',()=>{

         // 1. React all button tags from the DOM
         const buttons = domContainer.querySelectorAll('button');
         // 2. dispatch an event
        fireEvent.click( buttons[0]);
         // lets see that wheather the input element has value as email
         const inputs = domContainer.querySelectorAll('input');
         console.log(inputs[0].value);
         expect(inputs[0].value).toBe('sabnis_m@hotmail.com');
    });
});