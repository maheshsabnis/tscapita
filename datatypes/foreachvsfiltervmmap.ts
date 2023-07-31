let friends:Array<string> = new Array<string>();

friends =['Mahesh', 'Tejas', 'Vikram', 'Subodh', 'Manish', 'Suprotim', 'Ravi', 'Amitabh', 'Sachin', 'Kiran'];

let f1 = friends.forEach((n,i)=>{
    if(n[0] === 'S'){
        return n;
    }
}); 

console.log(`Original Array = ${JSON.stringify(friends)}`);
console.log(` Array  with 'S' = ${JSON.stringify(f1)}`);
console.log('Using map');
let f2 = friends.map((n,i)=>{
    if(n[0] === 'S'){
        return n.toUpperCase()  ;
    }
}); 

console.log(`Original Array = ${JSON.stringify(friends)}`);
console.log(` Array  with 'S' = ${JSON.stringify(f2)}`);

console.log('Using filter');
let f3 = friends.filter((n,i)=>{
    if(n[0] === 'S'){
        return n.toUpperCase()  ;
    }
}); 

console.log(`Original Array = ${JSON.stringify(friends)}`);
console.log(` Array  with 'S' = ${JSON.stringify(f3)}`);