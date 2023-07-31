var friends = new Array();
friends = ['Mahesh', 'Tejas', 'Vikram', 'Subodh', 'Manish', 'Suprotim', 'Ravi', 'Amitabh', 'Sachin', 'Kiran'];
var f1 = friends.forEach(function (n, i) {
    if (n[0] === 'S') {
        return n;
    }
});
console.log("Original Array = ".concat(JSON.stringify(friends)));
console.log(" Array  with 'S' = ".concat(JSON.stringify(f1)));
console.log('Using map');
var f2 = friends.map(function (n, i) {
    if (n[0] === 'S') {
        return n.toUpperCase();
    }
});
console.log("Original Array = ".concat(JSON.stringify(friends)));
console.log(" Array  with 'S' = ".concat(JSON.stringify(f2)));
console.log('Using filter');
var f3 = friends.filter(function (n, i) {
    if (n[0] === 'S') {
        return n.toUpperCase();
    }
});
console.log("Original Array = ".concat(JSON.stringify(friends)));
console.log(" Array  with 'S' = ".concat(JSON.stringify(f3)));
