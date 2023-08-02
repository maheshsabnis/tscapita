import { it,describe, test } from "node:test";
 
import { add } from "./add";




// test('add 2 numbers', () => {
//   expect(add(1, 2)).toBe(3);
// });

describe('The Test', () => {
    test('add 2 numbers', () => {
        expect(add(1, 2)).toBe(3);
      });
});
