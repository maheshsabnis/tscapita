var names = new Array();
names = ['Mahesh', 'Tejas', 'Vikram', 'Subodh', 'Manish', 'Suprotim', 'Ravi', 'Amitabh', 'Sachin', 'Kiran'];
console.log('Index of "Subodh" = ' + names.indexOf('Subodh1'));
// 1. using forEach() method, this does not return anything, insted only iterate over array
names.forEach(printValues);
// Explicitly written function that is passed as callback function
function printValues(n, i) {
    console.log("Value are ".concat(i, " is = ").concat(n));
}
console.log();
// 2. Inline callback function
names.forEach(function (n, i) {
    console.log("Value are ".concat(i, " is = ").concat(n));
});
// 3. Using Arrow OPerator, ES 6
names.forEach(function (n, i) {
    console.log("Value are ".concat(i, " is = ").concat(n));
});
