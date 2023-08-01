var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MyIterator = /** @class */ (function () {
    function MyIterator() {
    }
    /* A Custom Iterator Method */
    MyIterator.prototype.toList = function (values) {
        return __spreadArray([], values, true);
    };
    return MyIterator;
}());
var ite = new MyIterator();
var vals = ite.toList([10, 20, 30, 40]);
console.log(vals);
for (var n in ite.toList([10, 20, 30, 40])) {
    console.log(n);
}
