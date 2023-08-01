/* a generic class that will store the data in Key Value Pair
Multi-Type Generic
*/
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
        this.key = null;
        this.value = null;
    }
    KeyValuePair.prototype.setKeyValue = function (k, v) {
        this.key = k;
        this.value = v;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key : ".concat(this.key, " and value : ").concat(this.value));
    };
    return KeyValuePair;
}());
var kv1 = new KeyValuePair();
kv1.setKeyValue(1, ['Mahesh', 'Tejas', 'Jay']);
kv1.display();
