var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.add = function (a, b) {
        return a + b;
    };
    Mathematics.prototype.sub = function (a, b) {
        return a - b;
    };
    return Mathematics;
}());
var m = new Mathematics();
console.log("Add = ".concat(m.add(10, 20)));
console.log("Sub = ".concat(m.sub(10, 20)));
