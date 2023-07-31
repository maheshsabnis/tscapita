let names:Array<string> = new Array<string>();

names =['Mahesh', 'Tejas', 'Vikram', 'Subodh', 'Manish', 'Suprotim', 'Ravi', 'Amitabh', 'Sachin', 'Kiran'];

console.log('Index of "Subodh" = ' + names.indexOf('Subodh1'));

// 1. using forEach() method, this does not return anything, insted only iterate over array
names.forEach(printValues);
// Explicitly written function that is passed as callback function
function printValues(n:string, i:number):void {
    console.log(`Value are ${i} is = ${n}`);
}
console.log();
// 2. Inline callback function
names.forEach(function(n:string, i:number){
    console.log(`Value are ${i} is = ${n}`);
});

// 3. Using Arrow OPerator, ES 6

names.forEach((n:string, i:number)=>{
    console.log(`Value are ${i} is = ${n}`); 
});