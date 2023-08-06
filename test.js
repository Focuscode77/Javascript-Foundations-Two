//Writiing Functions practice 

const newLevel = () => {

    let workEthic = "Pratice coding everyday";
    let energyLevel = "Replinsh energy level with prayer and meditation "

    console.log(workEthic);
    console.log(energyLevel);

}

newLevel();

//Passing Functions through

const working = (letsgo) => {

    console.log(letsgo);
}

working("Function is working");


const eyewearshop = (glasses) => glasses;



eyewearshop("TomFord");


class Cat {

    constructor(move, rest, trick) {

        this.move = move;
        this.rest = rest;
        this.trick = trick;

    }

    makemove() {

        console.log('Meow');

    }

    makesleep() {

        console.log("I am sleepy");
    }

}

const Two = new Cat("sound", "tired", "sneak");


Two.makesleep();
Two.makemove();



// Working on reusable code
class Dog {
    constructor(speak, action, tired) {

        this.speak = speak;
        this.action = action;
        this.tired = tired;

    }
    makeSound() {
        const trickOne = this.speak;

        console.log(trickOne);

    }

    makeRun() {
        const trickTwo = this.action;

        console.log(trickTwo);

    }

    makeRest() {
        const trickThree = this.tired;

        console.log(trickThree);


    }

}
const Max = new Dog("woof", "run", "walk");

Max.makeSound();

Max.makeRun();

Max.makeRest();