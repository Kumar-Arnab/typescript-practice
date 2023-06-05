function triple(value) {
    if (typeof value === "string") {
        return value + value + value;
    }
    return value * 3;
}
var checkWord = function (word) {
    if (!word) {
        console.log("nothing was provided");
    }
    console.log(word);
};
checkWord("");
checkWord("motu biral");
var someCheck = function (x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(typeof x);
        console.log(typeof y);
    }
};
var talk = function (pet) {
    if ("meow" in pet)
        console.log(pet.meow());
    else
        console.log(pet.bark());
};
var chutki = { meow: function () { return "MEOWWW"; } };
talk(chutki);
