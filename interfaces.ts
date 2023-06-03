// Allows us to describe the shape of objects

interface Point {
  x: number;
  y: number;
};

const pt: Point = {x:123, y:123};

// optional and readonly interface
interface Cat {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // interface method
  sayHi(name: string): string;
};

const chutki: Cat = { 
  id: 4, 
  first: "Chutki", 
  last: "Biral",
  sayHi: (first) => {return `Hello ${first}!`} 
};

// chutki.id = 1; not allowed

console.log(chutki.sayHi(chutki.first));


// Extending interface
interface Animal {
  breed: string;
}

// Reopening interfaces 
interface Person extends Animal {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  breed: "Human",
  name: "Arnab",
  age: 25,
};


// Multiple inheritance in interfaces
interface Ma {
  ma: string;
};

interface Pa {
  baba: string; 
};

interface Child extends Ma, Pa {
  bacha: string;
};

const babu: Child = {
  ma: "Budiya",
  baba: "bada babu",
  bacha: "nalla enginner",
};