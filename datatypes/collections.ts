let arr:Array<string> = new Array<string>();

arr.push("Sean Connary");
arr.push("George Luznaby");
arr.push("Roger Moore");
arr.push("Trimothy Dalton");
arr.push("Pierce Brosnon");
arr.push("Danial Craig");
// ES Standard
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
} 
console.log();
// ES 3, simplification of for..loop
for(let i in arr){
    
    console.log('i = ' + i + 'and arr[i] = ' + arr[i]);
}

console.log();
// ES 6 Iterators using for..of loop
for(let n of arr){
    console.log(n);
}
 
console.log(arr.pop());

console.log('post pop');
// ES 6 Iterators using for..of loop
for(let n of arr){
    console.log(n);
}





