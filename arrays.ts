// this is of type never array not any array
const activeUsers: [] = [];

// we can't even initialize it
// activeUsers.push(1);  Argument of type 'number' is not assignable to parameter of type 'never'.


let names: string[] = ["hello", "world"];
names.push("Chutki");
console.log(names);

let numbers: Array<number> = [10, 11, 12, 13, 14, 15];
numbers[0] = 99;
console.log(numbers);

// Arrays with Object type
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];

coords.push({x: 12, y: 22});
coords.push();
// coords.push({y: 1}) not valid
console.log(coords)


// multidimensional arrays
const boards: string[][] = [
  ["x", "0", "x"], 
  ["x", "0", "x"], 
  ["x", "0", "x"]
]; // 2D array

const demo3D: number[][][] = [[[1]]]; // 3D array


// Exercises
// 1. create an empty array of numbers called 'ages'
const ages: [] = [];

// 2. create an array variable called gameBoard that starts as an empty array. It should be 2d array of strings
const gameBoard: string[][] = [[]];

// 3 & 4
type Product = {
  name: string;
  price: number;
};

const products: Product[] = [{name: "coffee mug", price: 11.50}];
console.log(products)
products.push({name: "biral", price: 100.75});

let sum: number = 0;
products.forEach(product => {
  sum += product.price;
});
console.log("Total price = ", sum)