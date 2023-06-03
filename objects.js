var cat = {
    name: "chutki",
    breed: "biral desi",
    age: 2.5
};
var printName = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
console.log(printName({ first: cat.name, last: cat.breed }));
var coordinates = { x: 24 };
console.log(coordinates);
var user = {
    id: 1234,
    username: "biralRaniChutki"
};
// user.id = 456; throws error
// nested object
var describePerson = function (person) {
    console.log("Person: ".concat(person.name, ";\nAge: ").concat(person.age, ";\nS/O: ").concat(person.parents.mom, " & ").concat(person.parents.dad));
};
describePerson({ name: 'Kali Biral', age: 10, parents: { mom: 'Kalini Biral', dad: 'Kaicharan Biral' } });
var jhuliBiral = {
    numLives: 5,
    breed: "Desi",
    age: 4
};
