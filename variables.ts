let movieTitle: string = "Border";
// movieTitle = 91;this will give error for typescript wherease js will allow it

let myNumber: number = 42;

// myNumber = "I'm not a string"; again not allowed in typescript

let myBoolean: boolean = true;

// Type inference
let naam = "arnab";
// naam = 9; this will throw error as typescript will automatically infer the type of varibale naam

// any type
let myComplicatedData: any = "This is going to be complicated!!";

myComplicatedData = 97;
myComplicatedData = true;
myComplicatedData = "This is not complicated!! This is any type 'any'";