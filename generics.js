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
// built-in generics
var nums = [];
// user defined generic
function numberIndentity(item) {
    return item;
}
function stringIndentity(item) {
    return item;
}
function booleanIndentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(7);
var res = identity("abc");
console.log(res);
function getRandomElement(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}
console.log(getRandomElement(["a", "b", "c", "d"]));
// ts can infer types, we don't need to specify the types everytime we pass elements of primitive types
getRandomElement(["ab", "c", "af"]);
// generics with multiple types
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: "Arnab" }, { pets: ["chutki", "kali", "hoppon"] });
console.log(comboObj);
