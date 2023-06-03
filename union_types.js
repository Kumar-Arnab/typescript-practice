var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.145, long: 23.4616 };
// union types with functions
var printAge = function (age) {
    console.log("Your age is ".concat(age, " years old."));
};
printAge(28);
printAge(30);
// type narrowing
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = price.replace("$", "");
        return parseFloat(price) * tax;
    }
    else {
        return price * tax;
    }
}
