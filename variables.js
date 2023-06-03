var movieTitle = "Border";
// movieTitle = 91;this will give error for typescript wherease js will allow it
var myNumber = 42;
// myNumber = "I'm not a string"; again not allowed in typescript
var myBoolean = true;
// Type inference
var naam = "arnab";
// naam = 9; this will throw error as typescript will automatically infer the type of varibale naam
// any type
var myComplicatedData = "This is going to be complicated!!";
myComplicatedData = 97;
myComplicatedData = true;
myComplicatedData = "This is not complicated!! This is any type 'any'";
