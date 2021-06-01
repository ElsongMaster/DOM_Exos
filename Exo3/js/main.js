let myBody = document.querySelector("body");
//Exo 1
let collectionDiv = myBody.getElementsByTagName("div");
let lastDiv = collectionDiv[collectionDiv.length - 1];
let firsChildOfLastDiv = lastDiv.firstElementChild;

console.log(firsChildOfLastDiv);

//Exo 2
let lastChildOfLastDiv = lastDiv.lastElementChild;

console.log(lastChildOfLastDiv);
//Exo 3

let eltI = lastDiv.firstElementChild;

console.log(eltI);
//Exo 4

let lastDivCollectionP = lastDiv.getElementsByTagName("p");

let lastP = lastDivCollectionP[lastDivCollectionP.length - 1];

let eltB = lastP.querySelector("b");

console.log(eltB);

//Exo 5

let eltIAdjacent = eltI.parentElement;

console.log(eltIAdjacent);

//Exo 6

let eltBAdjacent = eltB.parentElement;

console.log(eltBAdjacent);

//Exo 7

let pElt = firsChildOfLastDiv.nextElementSibling;

console.log(pElt);
