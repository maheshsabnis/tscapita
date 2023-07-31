let x:number = 10; // An Explict declaration of Type

console.log('x = ' + x + '  and type of x = ' + typeof(x));

let y = 20; // An implicit declaration of type 
console.log('y = ' + y + '  and type of y = ' + typeof(y));


let z; // Same as 'var' in JavaScript

z = 10; // Parse and Infer the Data Type , the number
console.log('z = ' + x + '  and type of z = ' + typeof(z));
z = "Mahesh"; // Parse and Infer the Data Type , the string
console.log('z = ' + x + '  and type of z = ' + typeof(z));
z = 100;
console.log('z = ' + x + '  and type of z = ' + typeof(z));
z = "James Bond";
console.log('z = ' + x + '  and type of z = ' + typeof(z));


let x1:number;
x1 = 11;
console.log('x1 = ' + x1 + '  and type of x1 = ' + typeof(x1));
