let map = new Map<number,string>();

map.set(1, 'A');
map.set(2, 'B');
map.set(3, 'C');
map.set(4, 'D');
map.set(4, 'E'); // Only Unique Key is allowed so D will be Overwritten by E

map.forEach((v,k)=>{
    console.log(`Value at key = ${k} is  = ${v}`);
});
console.log();
// Delete a Key
//map.delete(1);

map.forEach((v,k)=>{
    console.log(`Value at key = ${k} is  = ${v}`);
});

/* The Standard Iterator for Map, this internally generate a sequence using Generator */
console.log('Only Keys');
for(let key of map.keys()){
    console.log(`Key = ${key}`);
}
console.log('Only Values');

for(let value of map.values()){
    console.log(`value = ${value}`);
}
console.log('Reading Keys and Values based in ENtries');
/* The record is Tuple
 Tuple is an array of hetrogeneous type of values 
*/
for(let record in map.entries()) {
    console.log(`key = ${record[0]} is  = ${record[1]}`);
}

console.log('Instead of Reading an indexes of Tuples from entries, directly use Destructuring');

for(let [key,value] of map){
    console.log(`Key = ${key} and value = ${value}`);
}

