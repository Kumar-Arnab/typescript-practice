const cat = {
  name: "chutki",
  breed: "biral desi",
  age: 2.5
}

const printName = (name: {first: string, last: string}): string => {
  return `Name: ${name.first} ${name.last}`;
};

console.log(printName({first: cat.name, last: cat.breed}));

let coordinates: { x?: number, y?:number, z?: number } = {x: 24};

console.log(coordinates);

// Type alias

// type Cat = {
//   name: string;
//   breed: string;
//   age: number
// };

// let sayHappyBirthday = (cat: Cat): string => {
//   return `Happy birthday ${cat.name}, congrats on being a ${cat.breed} of ${cat.age}`;
// }

// console.log(sayHappyBirthday({name: 'Chutki Biral', breed: 'Desi Biral', age: 3}));


// readonly modifier
type User = {
  readonly id: number;
  username: string;
}

const user: User = {
  id: 1234,
  username: "biralRaniChutki"
}

// user.id = 456; throws error


// nested object
const describePerson = (person: {
  name: string;
  age: number;
  parents: {
    mom: string;
    dad: string;
  }
}) => {
  console.log(`Person: ${person.name};\nAge: ${person.age};\nS/O: ${person.parents.mom} & ${person.parents.dad}`)
};


describePerson({name:'Kali Biral', age: 10, parents: {mom: 'Kalini Biral', dad: 'Kaicharan Biral'}})


// intersection type
type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & {
  age: number;
}

const jhuliBiral: CatDog = {
  numLives: 5,
  breed: "Desi",
  age: 4
}