console.log("Its ts getting compiled to js");
console.log("Typing typescript");

class Player {

  // readonly fields cannot be changed/updated/modified after object creation
  // public and private modifiers only exists in typescript
  // public is always set by default

/* readonly first: string;
   public readonly last: string;

  
   constructor(first: string, last: string) {
     this.first = first;
     this.last = last;
 }  

  we can also write the constructor in shorthand like */
  constructor(
    public first: string, 
    public last: string
  ) {}

  // protected can be accessed from the class and any child class
  protected score: number = 0;

  // private means we can only access this inside a class
  // private methods
  private secretMethod(): void {
    console.log("Secret Method Using getter function!!!");
  }

  public getSecretMethod() {
    console.log("idhar se hi ayega")
    return this.secretMethod();
  }


  // getters
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get displayScore(): number {
    return this.score;
  }

  // setters
  set newScore(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be assigned less than 0");
    }
    this.score = newScore;
  }

}

const chutki: Player = new Player("chutki", "biral");
console.log(chutki)

// console.log(chutki.score) not allowed as score field is set to private
// chutki.first = "Chutki Mutki" not allowed
chutki.getSecretMethod();
console.log(chutki.fullName);


// calling getters and setters
console.log("default score ", chutki.displayScore);
chutki.newScore = 420;
console.log("new Score ", chutki.displayScore);

class SuperPlayer extends Player {

  isAdmin: boolean = true;

  maxScore() {
    this.score = 999999999;
  }

}


interface Color {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Color {
  constructor(
    public color: string,
  ) {}
}

class Jacket implements Color, Printable {
  constructor(
    public brand: string,
    public color: string,
  ) {}

  print() {
    console.log(`Jacket is ${this.color} of ${this.brand}`)
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("denim", "black");

jacket1.print();


// abstract classes are classes which you cant make any object of
// they are used for inheritance generally
abstract class Employee {
  constructor(
    public first: string,
    public last: string,
  ) {}

  // any abstract method in an abstract class needs to exists in any subclass which extends them
  abstract getPay(): number;

  greet() {
    console.log(`Hello ${this.first} ${this.last}`);
  }
}

class FullTimeEmployee extends Employee {

  constructor(
    public first: string,
    public last: string,
    private salary: number,
  ) {
    super(first, last);
  }

  getPay() {
    return 24346548;
  }

}


class PartTimeEmployee extends Employee {

  constructor(
    public first: string,
    public last: string,
    private salary: number,
  ) {
    super(first, last);
  }

  getPay() {
    return 4561365;
  }
  
}

const biralChutki = new FullTimeEmployee("Chutki", "Biral", 123456);
const biralJhuli = new FullTimeEmployee("Jhuli", "Biral", 098765);