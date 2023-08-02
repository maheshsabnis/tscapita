import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { add } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('add function', () => {
  describe('when given to integers', () => {
    it("should return a add result", () => {
      // Arrange: Prepare the expected add result and the function arguments.
      // In this example 5 + 8 === 13:
      const [a, b, expected] = [5, 8, 13];

      // Here, we assign "a === 5," "b === 8," and "expected === 13" using array destructuring.

      // Act: To obtain a true function result, utilise the "add" function.
      const result = add(a, b);

      // Assert: Now a function's output is compared to the expected result.
      expect(result).toEqual(expected);
    });
  })
})

