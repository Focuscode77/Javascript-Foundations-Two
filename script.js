// Map is another method that can be used

const myArray = arr = ["hey", "Josh", "Lets", "go"];
//Map returns an arry value
arr.map((data) => {
    //console.log(data);
    return data;


});

console.log(myArray);

//DOM Matiipulation

//const div = document.getElementById("myDiv");
//const div = document.querySelector("#myDiv");
//const divs = document.getElementsByClassName("myDivClass")
const divs = document.querySelectorAll(".myDivClass")
console.log(divs);

for (i = 0; i < divs.length; i++) {

    console.log(divs[i]);
    const div = divs[i]

    div.style.backgroundColor = "orange";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.margin = "5px";

}

//const catPicUrl = "img/27408E83-35F2-4BB8-B7FB-6548FB094BBB_1_105_c.jpeg";

//const img = document.querySelector("img")
//img.setAttribute("src", catPicUrl);
//img.setAttribute("src", "cat picture");


//Homework go over soruce attribute
