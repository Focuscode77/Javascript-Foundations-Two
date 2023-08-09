//return method

const getTheDayOfTheWeek = () => {

    const day = "Monday";

    return day;
    // Note that anything after the return value will not be executed
}

const dayOfWeek = getTheDayOfTheWeek()
//console.log(dayOfWeek);


const eatFood = () => {

    const meals = "AppleSalad";

    return meals;

}

console.log(eatFood());

//specifies a value to be returned within the function caller
//The return statement ends function execution

const getColor = () => {

    return "green";
}

//console.log(getColor());

const getMessage = (message) => {

    return message;


}

//console.log(getMessage("This value is being returned through a function"));


// Turn into a program

const getBabyName = (gender) => {

    if (gender === "boy") {
        return "John";

    } else if
        (gender === "girl") {
        return "Kim";

    }

    console.log("Maybe next time");
}

//console.log(getBabyName("boy"));


const ownVibe = (Life) => {

    if (Life === "Joy") {

        return "Everything will workout for you";
    } else {

        console.log("Work on building yourself up");

    }

}

console.log(ownVibe("Joy"));

//Pratice 
const practice = (time) => {

    if (time === "Dream Life") {

        return "Everything will come together you are a hard worker";

    } else {

        console.log("Try again");


    }

}

console.log(practice("Dream Life"));


//Trim pratice

const numberOfGlasses = "   I Have Ten Pairs of Glasses     ";

console.log(numberOfGlasses.trim().length);








