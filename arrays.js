// this is of type never array not any array
var activeUsers = [];
// we can't even initialize it
// activeUsers.push(1);  Argument of type 'number' is not assignable to parameter of type 'never'.
var names = ["hello", "world"];
names.push("Chutki");
console.log(names);
var numbers = [10, 11, 12, 13, 14, 15];
numbers[0] = 99;
console.log(numbers);
var coords = [];
coords.push({ x: 12, y: 22 });
coords.push();
// coords.push({y: 1}) not valid
console.log(coords);
// multidimensional arrays
var boards = [
    ["x", "0", "x"],
    ["x", "0", "x"],
    ["x", "0", "x"]
]; // 2D array
var demo3D = [[[1]]]; // 3D array
// Exercises
// 1. create an empty array of numbers called 'ages'
var ages = [];
// 2. create an array variable called gameBoard that starts as an empty array. It should be 2d array of strings
var gameBoard = [[]];
var products = [{ name: "coffee mug", price: 11.50 }];
console.log(products);
products.push({ name: "biral", price: 100.75 });
var sum = 0;
products.forEach(function (product) {
    sum += product.price;
});
console.log("Total price = ", sum);
