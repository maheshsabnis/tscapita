var Stack = /** @class */ (function () {
    function Stack() {
        this.items = new Array();
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.showItems = function () {
        return this.items;
    };
    return Stack;
}());
var numStack = new Stack();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
numStack.push(50);
console.log("Items in Number Stack = ".concat(JSON.stringify(numStack.showItems())));
console.log("Poped Values from Number Stack = ".concat(numStack.pop()));
console.log("After pop ooperation Items in Number Stack = ".concat(JSON.stringify(numStack.showItems())));
