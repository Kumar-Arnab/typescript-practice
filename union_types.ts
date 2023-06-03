type Point = {
  x: number;
  y: number;
};

type LOC = {
  lat: number;
  long: number;
};

let coordinates: Point | LOC = {x: 1, y: 34};

coordinates = {lat: 321.145, long: 23.4616};

// union types with functions
const printAge = (age: number | string) => {
  console.log(`Your age is ${age} years old.`);
}

printAge(28);
printAge(30);


// type narrowing
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = price.replace("$", "");
    return parseFloat(price) * tax;
  } else {
    return price * tax;
  }
}


// union type array of multiple types
const arr: (number | string | boolean)[] = [1, 2, 3, "asd", true];

// literal types
let zero: 0 = 0;
// zero = 2; not allowed var zero is only 0

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

let today: DayOfWeek = "Mon";