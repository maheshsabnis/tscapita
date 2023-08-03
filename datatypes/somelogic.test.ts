import { sumation,substrctaion } from "./somelogic";
// Test Suit
describe('The Sime Basic Test',()=>{

    // The Test Case
    test('add two numbers', ()=>{
        // Arrange
        let x:number = 10;
        let y:number = 20;
        let expected = 30; 

        // act
        let actual = sumation(x,y);

        // assertion
        expect(actual).toBe(expected);
    })
});

describe('The Sime Basic Test',()=>{

    // The Test Case
    test('substract two numbers', ()=>{
        // Arrange
        let x:number = 100;
        let y:number = 20;
        let expected = 80; 

        // act
        let actual = substrctaion(x,y);

        // assertion
        expect(actual).toBe(expected);
    })
});