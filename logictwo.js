//return method

const getTheDayOfTheWeek = () => {

    const day = "Monday";

    return day;
    // Note that anything after the return value will not be executed
}

const dayOfWeek = getTheDayOfTheWeek()
console.log(dayOfWeek);

//specifies a value to be returned within the function caller
//The return statement ends function execution

const getColor = () => {

    return "green";
}

console.log(getColor());

const getMessage = (message) => {

    return message;


}

console.log(getMessage("This value is being returned through a function"));


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

console.log(getBabyName("boy"));