//Objects Practice
//This is an objecct
const getPlants = {
    // This is a property which has key value pairs
    newPlant: "Liviing room Plant",

    serialNumber: 123409202,
    //Methods have ananomyus functions that you an call
    sayHi: () => {

        console.log("nice to meet you");
    }

}

console.log(getPlants.sayHi());


//An object is creating something that you can use

const gameDay = {

    ps5: "Amored Core 6",

    hoursPlaying: 24,

    readyToGo: () => {

        console.log("I am ready to play this game");

    }


}


console.log(gameDay.hoursPlaying);
console.log(gameDay.ps5);
console.log(gameDay.readyToGo());



// Quick Caculator app

const calculator = {

    add: (a, b) => {

        return a + b

    },

    sub: (a, b) => {

        return a - b

    },
    multiply: (a, b) => {

        return a * b

    }


}

console.log(calculator.add(5, 5));
console.log(calculator.sub(5, 5));
console.log(calculator.multiply(5, 5));



