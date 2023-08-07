//Methods for number variables
//toFixed() allows you to only grab the first digit of a number set


const x = 2.4567897;

console.log("x:", x);

const y = x.toFixed()

console.log(y);

//ToString()

const b = 10;

console.log(b);
console.log(b.toString());


//Math
//Math.floor
//Math.ceil
//Math.random

const c = 10.5;

console.log(Math.ceil(c))

const z = 3
const s = z + 0.5;
const p = Math.floor(s);

console.log(p)

const k = Math.random();

console.log(k);

//boolean



const isLightOn = true;


console.log(isLightOn);

//If else Statement allows you to add logic to your app

const hasFoundKeys = true;

if (hasFoundKeys) {

    console.log('I found my keys');

} else {

    console.log("Still looking for my keys");

}

const isWaterBottleEmpty = true;

if (isWaterBottleEmpty) {

    console.log("Water bottle is full I am ready to workout");

} else {

    console.log("Water bottle needs to be refilled i am thristy");


}

// More than one condtion examples
//Note you must always start off with and if statement in order to kicl of the logicc
const hasFoundAllOfMyKeys = false;
const hasOnlyFoundHouseKey = true;

if (hasFoundAllOfMyKeys) {
    console.log("I found all of my keys");
} else if (hasOnlyFoundHouseKey) {

    console.log("I only found my house keys");
} else {

    console.log("I found no keys!!")

}

