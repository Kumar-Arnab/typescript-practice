// any type parameter
function square(num) {
    return num * num;
}
square(2);
square("Arnab");
square(true);
// with type parameter
var encourage = function (name) {
    return "Hello ".concat(name, ", you're doing great");
};
encourage("Arnab");
// encourage(4); not acceptable by ts
var meow = function (name, age, isCat) { };
meow("chutki", 27, true);
// function with default parameter
function greet(name) {
    if (name === void 0) { name = "stranger"; }
    return "Hey there, ".concat(name, "!");
}
greet();
greet("Arnab");
// function with return type annotation
var addNums = function (x, y) {
    return x + y;
};
addNums(2, 3);
// function with no return type in considered as any
function rando(num) {
    if (Math.random() < 0.5)
        return num.toString();
    return num;
}
// function exercises
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
console.log(twoFer());
console.log(twoFer("Elton"));
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) ? true : (year % 400 === 0) ? true : false;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
