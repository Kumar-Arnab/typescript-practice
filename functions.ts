// any type parameter
function square(num) {
  return num * num;
}

square(2);
square("Arnab");
square(true);


// with type parameter
const encourage = (name: string) => {
  return `Hello ${name}, you're doing great`;
}

encourage("Arnab");
// encourage(4); not acceptable by ts

const meow = (name: string, age: number, isCat: boolean) => {};

meow("chutki", 27, true);


// function with default parameter
function greet(name: string = "stranger") {
  return `Hey there, ${name}!`;
}

greet();
greet("Arnab");


// function with return type annotation
const addNums = (x: number, y: number): number => {
  return x + y;
};
addNums(2, 3);

// function with no return type in considered as any
function rando(num: number) {
  if (Math.random() < 0.5) return num.toString();

  return num;
}



// function exercises
const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me`;
};

console.log(twoFer());
console.log(twoFer("Elton"));

const isLeapYear = (year: number): boolean => {
  return (year%4 === 0 && year%100 !== 0) ? true : (year%400 === 0) ? true: false;
}

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));