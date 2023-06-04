"use strict";
console.log("Its ts getting compiled to js");
console.log("Typing typescript");

class Player {

  // This property will exists in Player class not on individual instances/objects of the class
  static description = "Player in our game";
  // we can also use this with a method
  static secret() {
    console.log("Cigaratte method invoked");
  }

  // class default fields
  #score = 0; // any property which starts with a # should only be usable inside of a JS class (makes the field private)
  #numLives = 9;

  // A default constructor already defined in JS
  // We need constructor to create an object of the class
  constructor(first, last){
    console.log("New Player Object created");
    this.first = first;
    this.last = last;
  }

  taunt(){
    console.log("NOOOB");
  }

  loseLife() {
    this.numLives -= 1;
  }

  // getter function
  getScore() {
    return this.#score;
  }

  // setter function
  updateScore(newScore) {
    this.#score = newScore;
  }

  // getter property of class its not a function
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  // setting property of a class again not a function
  set newScore(newScore) {
    if (newScore <0) throw new Error("score cannot be less than 0");

    this.#score = newScore;
  }
}

// Accessing static property
console.log(Player.description);
Player.secret();

const player1 = new Player("chutki", "biral");
console.log(player1);
player1.taunt();
console.log(player1.first);
// console.log(player1.numLives);
player1.loseLife()
// console.log(player1.numLives);

// console.log(player1.#score); not allowed
console.log(player1.getScore())
player1.updateScore(10);
console.log(player1.getScore());
console.log(player1.fullName);
player1.newScore = 1234;
console.log(player1.getScore());


// Class inheritance
class AdminPlayer extends Player {
  // This class will have all functionalities of PLayer class
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }

}

const admin = new AdminPlayer("chitiya", "gamer", ["delete account", "ban account", "restore world"]);
console.log("Below are the op from child class ", admin);
console.log(admin.getScore()); // it has access to its parent class properties
admin.taunt();