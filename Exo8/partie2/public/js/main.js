//Exo 1

let H1Elt = document.querySelector("h1");

H1Elt.innerText = "Les attributs class et id";

console.log(H1Elt);

//Exo 2

let firstH2 = document.querySelector("h2");

firstH2.innerText = "Exercice 2 partie A";

//Exo 3

let secondH2 = document.querySelectorAll("h2")[1];

secondH2.innerText = "Exercice 2 partie B";

console.log(secondH2);

//Exo 4

let firstP = document.querySelector("p");
firstP.innerHTML =
  "L'ajout de class et d'ID est assez simple, il suffit de connaitre les méthodes <b>par coeur</b>";

//Exo 5
let secondP = document.querySelectorAll("p")[1];
secondP.innerHTML =
  "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

//Exo 6
H1Elt.setAttribute("id", "bigTitle");

//Exo 7

let divElt = document.querySelector("div");

divElt.setAttribute("class", "container");

//Exo 8

let tabH2 = Array.from(document.querySelectorAll("h2"));
tabH2.forEach((elt) => {
  elt.setAttribute("class", "title");
});

//Exo 9

let tabP = Array.from(document.querySelectorAll("p"));
tabP.forEach((elt) => {
  elt.setAttribute("class", "text");
});

//Exo 10

let firstSection = document.querySelector("section");

firstSection.setAttribute("class", "margin-bottom border-black padding");

//Exo 11

let secondSection = document.querySelectorAll("section")[1];

secondSection.setAttribute("class", "margin-top border-black padding");

//Exo 12

let divInsideSection = document.querySelector("section > div");

divInsideSection.setAttribute("style", "");
divInsideSection.style.background = "blue";
divInsideSection.style.border = "2px solid yellow";
divInsideSection.style.height = "20px";
divInsideSection.style.width = "20px";
