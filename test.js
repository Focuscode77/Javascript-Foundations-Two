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


class Dog {
    constructor(a, b, c) {

        this.a = a;
        this.b = b;
        this.c = c;

    }
    makeSound() {
        const one = this.a;
        return one;

    }

}
const Max = new Dog("woof", "run", "walk");

Max.makeSound();