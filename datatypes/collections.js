var arr = new Array();
arr.push("Sean Connary");
arr.push("George Luznaby");
arr.push("Roger Moore");
arr.push("Trimothy Dalton");
arr.push("Pierce Brosnon");
arr.push("Danial Craig");
// ES Standard
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log();
// ES 3, simplification of for..loop
for (var i in arr) {
    console.log('i = ' + i + 'and arr[i] = ' + arr[i]);
}
console.log();
// ES 6 Iterators using for..of loop
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    console.log(n);
}
console.log(arr.pop());
console.log('post pop');
// ES 6 Iterators using for..of loop
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var n = arr_2[_a];
    console.log(n);
}
