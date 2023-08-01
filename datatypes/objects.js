// JSON Object with a property aka Literal as x with value as 10 
var obj1 = { x: 10 };
console.log("obj1.x = ".concat(obj1.x));
var obj2 = obj1; // assignment og obj1 to obj2
console.log("obj1.x = ".concat(obj1.x, " and obj2.x = ").concat(obj2.x));
// Modify x for obj2
obj2.x = 100;
console.log("After modification of obj2.x to 100 obj1.x = ".concat(obj1.x, " and obj2.x = ").concat(obj2.x));
// Using Object.assign()
// Parameter 1: an the targe =t object where the source schema and value will be copied
// Parameter 2: The source object of which schema and values are copied into the target 
var obj3 = Object.assign({}, obj2);
console.log("After Object.assign of obj2.x = ".concat(obj2.x, " and obj3.x = ").concat(obj3.x));
// Modify Obj3
obj3.x = 900;
console.log("After modification of obj3.x to 900 obj2.x = ".concat(obj2.x, " and obj3.x = ").concat(obj3.x));
