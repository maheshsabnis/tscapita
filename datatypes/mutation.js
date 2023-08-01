var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var obj11 = { a: 10, b: 20 };
console.log("obj11.a = ".concat(obj11.a, " and obj11.b = ").concat(obj11.b));
// Using Spread
obj11 = __assign(__assign({}, obj11), { c: 30 });
console.log("obj11.a = ".concat(obj11.a, " and obj11.b = ").concat(obj11.b, " and obj11.c = ").concat(obj11.c));
