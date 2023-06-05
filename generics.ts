// built-in generics
const nums: Array<number> = [];


// user defined generic
function numberIndentity(item: number): number {
  return item;
}

function stringIndentity(item: string): string {
  return item;
}

function booleanIndentity(item: boolean): boolean {
  return item;
}

function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
const res = identity<string>("abc");
console.log(res);


function getRandomElement<T>(array: T[]): T {
  const randIndex = Math.floor(Math.random() * array.length);

  return array[randIndex];
}

console.log(getRandomElement<string>(["a", "b", "c", "d"]));

// ts can infer types, we don't need to specify the types everytime we pass elements of primitive types
getRandomElement(["ab", "c", "af"]);

// generics with multiple types and type constraints
function merge<T extends object, U extends object>(object1: T, object2: U): T & U {
  return{
    ...object1,
    ...object2,
  }
}

const comboObj = merge(
  {name: "Arnab"},
  {pets: ["chutki", "kali", "hoppon"]}
)

console.log(comboObj);

// extending an user defined interface
interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// providing default values for type parameter
function makeEmptyArray<T = number>(): T[] {
  return [];
}
const num = makeEmptyArray(); // if no type is specified, it will default to number
const booool = makeEmptyArray<boolean>(); // here type boolean is specified so we get a boolean type array


// Generic Classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {

  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }

}

const song = new Playlist<Song>();

const video = new Playlist<Video>();