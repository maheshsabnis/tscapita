var Overloading = /** @class */ (function () {
    function Overloading() {
    }
    Overloading.prototype.add = function (v1, v2) {
        return v1 + v2;
    };
    return Overloading;
}());
var o1 = new Overloading();
console.log("For Strings = ".concat(o1.add('Mahesh', 'Sabnis')));
console.log("For Numbers = ".concat(o1.add(100, 200)));
