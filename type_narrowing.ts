function triple(value: number | string) {
  if (typeof value === "string") {
    return value + value + value;
  }
  return value * 3;
}

const checkWord = (word: string | null) => {
  if (!word) {
    console.log("nothing was provided");
  }
  console.log(word);
};

checkWord("");
checkWord("motu biral");

const someCheck = (x: string | boolean, y: string | undefined) => {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(typeof x);
    console.log(typeof y);
  }
}


type Cat = { meow: () => void };
type Dog = { bark: () => void };

const talk = (pet: Cat | Dog) => {
  if ("meow" in pet) console.log(pet.meow());

  else console.log(pet.bark());
}

const chutki: Cat = {meow: () => "MEOWWW"};
talk(chutki);



function printFullDate(date: Date | string) {
  if (date instanceof Date) return date.toISOString();

  else return new Date(date).toISOString();
}