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

working("On god we will become an engineer");


const eyewearshop = (glasses) => glasses;



eyewearshop("TomFord");

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