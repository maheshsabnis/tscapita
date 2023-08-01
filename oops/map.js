var map = new Map();
map.set(1, 'A');
map.set(2, 'B');
map.set(3, 'C');
map.set(4, 'D');
map.set(4, 'E'); // Only Unique Key is allowed so D will be Overwritten by E
map.forEach(function (v, k) {
    console.log("Value at key = ".concat(k, " is  = ").concat(v));
});
console.log();
// Delete a Key
//map.delete(1);
map.forEach(function (v, k) {
    console.log("Value at key = ".concat(k, " is  = ").concat(v));
});
/* The Standard Iterator for Map, this internally generate a sequence using Generator */
console.log('Only Keys');
for (var _i = 0, _a = map.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log("Key = ".concat(key));
}
console.log('Only Values');
for (var _b = 0, _c = map.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("value = ".concat(value));
}
console.log('Reading Keys and Values based in ENtries');
/* The record is Tuple
 Tuple is an array of hetrogeneous type of values
*/
for (var record in map.entries()) {
    console.log("key = ".concat(record[0], " is  = ").concat(record[1]));
}
console.log('Instead of Reading an indexes of Tuples from entries, directly use Destructuring');
for (var _d = 0, map_1 = map; _d < map_1.length; _d++) {
    var _e = map_1[_d], key = _e[0], value = _e[1];
    console.log("Key = ".concat(key, " and value = ").concat(value));
}
