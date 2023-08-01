/* Importing an exporatble type */
import  Utilities  from "./exporatblemodule";

let util = new Utilities();

let str = 'TypeScript is Great';

console.log(`Upper case of ${str} is = ${util.changeCase(str, 'u')}`);

console.log(`Lower case of ${str} is = ${util.changeCase(str, 'L')}`);

console.log(`Reverse of ${str} is = ${util.reverseString(str)}`);
