let obj11 = {a:10,b:20}; 
console.log(`obj11.a = ${obj11.a} and obj11.b = ${obj11.b}`);
// Using Spread
obj11 = {...obj11, c:30};

console.log(`obj11.a = ${obj11.a} and obj11.b = ${obj11.b} and obj11.c = ${obj11.c}`);

let arr111 = [10,20];

arr111 = [...arr111, 40,50]
