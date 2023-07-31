var values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// sum of all values from array
// 1. previous: THe Result of Previous iteration over array
// 2. current: The current Element in 'read' from Array
// 3. index: An Index of the element being read
// 4. val: A Array itself that is being processed
var sumRec = values.reduce(function (previous, current, index, val) {
    console.log("Previous :".concat(previous, " Current: ").concat(current, " index: ").concat(index, ", valuew = ").concat(val));
    return previous + current;
});
console.log("Sum = ".concat(sumRec));
console.log("Frequency of an occurance of a record in array");
var characters = ['A', 'B', 'C', 'D', 'E', 'A', 'E', 'B', 'A', 'C', 'D', 'A', 'C', 'E', 'F', 'D', 'E', 'A', 'H', 'B', 'C'];
var frequency = characters.reduce(function (prev, current, idx, val) {
    console.log("prev = ".concat(JSON.stringify(prev), " and current = ").concat(current));
    if (current in prev) {
        prev[current]++; // increment the frequency counter by 1
        console.log("Current in Prev ".concat(JSON.stringify(prev)));
    }
    else {
        prev[current] = 1; // there is no repetation of the record in array
    }
    return prev;
}, {}); // An inital value of the 'prev'
console.log("Frequency of Each Record in characters array us = ".concat(JSON.stringify(frequency)));
