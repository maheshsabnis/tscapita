import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './Logincomponent';
import * as ReactDOM from 'react-dom';

 

describe('Login component tests', () => {
  let container: HTMLDivElement

  // beforeEach: Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  })

  // to clear everything at the end so that tests don't interrupt each other
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  // Running test to render each input field
  it('Renders all input fields correctly', () => {
    // Selecting the input fields
    const inputs = container.querySelectorAll('input');
    // Asserting that the input fields are rendered correctly
    expect(inputs).toHaveLength(2);

    // Let's check the first and second input field with the name "email" and "password" respectively
    expect(inputs[0].name).toBe('email');
    expect(inputs[1].name).toBe('password');
  });

  // Running test to render each button
  it('Renders all buttons correctly', () => {
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0].type).toBe('button');
    expect(buttons[1].type).toBe('button');
  });

})
