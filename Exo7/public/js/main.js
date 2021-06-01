//Exo 1
let listEltRedPurple = document.getElementsByClassName("redPurple");

console.log(listEltRedPurple);

//Exo 2

listEltRedPurple = document.querySelectorAll(".redPurple");

console.log(listEltRedPurple);

//Exo 3

let h1RedPurple = document.querySelectorAll("h1.redPurple");
console.log(h1RedPurple);

//Exo 4

let severalTags = document.querySelectorAll("li,p,span");

console.log(severalTags);

//Exo 5

let severalElts = document.querySelectorAll("li.important,p");

console.log(severalElts);

//Exo 6

let eltsRedPurple = document.querySelectorAll("h1.redPurple, span.redPurple");

console.log(eltsRedPurple[0].id);

let ulElt = document.querySelector("#listElements");
console.log(ulElt.id);
