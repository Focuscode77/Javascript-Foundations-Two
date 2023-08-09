console.log("Lets Go");
console.log("This is the year I will get a frontEnd engineering")
//Strings has properites

const myString = "KenDoll";
console.log(myString.length);

const myLowerCase = "EVERYTHING";

console.log(myLowerCase.toLowerCase());

const myPractice = "Vibes";

console.log(myPractice.toLowerCase());

// This goes over the trim method as it is used to triim access values from  stored characters
const myName = "     Happen    ";

const trimmed = myName.trim();

console.log(myName.length);
console.log(trimmed.length);


//Chaining methods together to right less code

const Job = "  Congratulations   "
console.log(Job.trim().length);


// Index oF Caracters

const Load = "James";

console.log(Load.indexOf("m"));

debugger
const costOfApple = 3;
const costOfAppleToBuy = 5;

const total = costOfApple * costOfAppleToBuy;

console.log(total);

const playingWithNum = 10;
const numbersTwo = 5;

console.log(playingWithNum + numbersTwo);
console.log(playingWithNum - numbersTwo);
console.log(playingWithNum * numbersTwo);
console.log(playingWithNum ** numbersTwo);
console.log(playingWithNum / numbersTwo);

// Incrementing Lesson

let a = 3

console.log("before increment :", a);
a++;

console.log("after increment :", a);

// Array

const nameOfGame = ["amoredcore", "eldenring", 'final fantasy'];

console.log(nameOfGame[0]);
console.log(nameOfGame.indexOf("amoredcore"));
console.log(nameOfGame.length);

nameOfGame.push('FRAM');

console.log(nameOfGame.length);


//anonymous function example

const mySandwitch = ["Tomato", "Cucumber", "Lettece", "Meat", "Chesse"]
//This is an example because we have not named the filter anything it takes in a function as a prameter

const filterArray = mySandwitch.filter((data) => {
    const indexofA = data.indexOf("T");

    const hasTheLetterA = indexofA !== -1;
    return indexofA;
});
const hungry = mySandwitch.find((data) => {

    return data.length > 4;
})

console.log(hungry);

//console.log(filterArray);
