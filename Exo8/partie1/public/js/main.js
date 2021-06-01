//Exo 1

let h2Exercice = document.querySelector("h2");

console.log(h2Exercice);

//Exo 2

h2Exercice.innerText = "Exercice 1";

//Exo 3
let pElt = h2Exercice.nextElementSibling;
pElt.innerText = "h2Exercice.innerText = Exercice 1;";
console.log(pElt);

//Exo 4

let firstSection = document.querySelector("section");

console.log(firstSection.id);

//Exo 5

let firstH1 = document.querySelector("h1");

console.log(firstH1.className);
console.log(firstH1.getAttribute("class"));
console.log(firstH1.classList);

//Exo 6

Array.from(document.querySelectorAll("h1")).forEach((elt) => {
  console.log(elt.className);
});

//Exo 7
let inputElt = document.querySelector("input");

console.log(inputElt.attributes);

//Exo 8
let inputType = inputElt.type;
console.log(inputType);

//Exo 9

let inputPwd = document.querySelector("#inputPassword3");
inputPwd.setAttribute("type", "password");

console.log(inputPwd);

//Exo 10

inputElt.type = "color";

console.log(inputElt);
