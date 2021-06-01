//Exo 1

let h3Tag = document.querySelector("#content>h3");

console.log(h3Tag);

//Exo 2

let titleNiv3 = document.querySelector("#titreNiv3");

console.log(titleNiv3);

//Exo 3
console.log(titleNiv3.previousElementSibling);

// Exo 4

console.log(document.querySelector(".petitParagraphe").nextElementSibling);

//Exo 5

// Array.from(document.getElementsByClassName("important")).forEach((elt) => {
//   console.log(elt.parentNode);
// });

//ou

console.log(document.querySelector(".important").parentNode);

//Exo 6

console.log(
  document.querySelector("#listElements").parentNode.firstElementChild
);

//Exo 7
let collectImportant = document.getElementsByClassName("important");
console.log(collectImportant[collectImportant.length - 1].nextElementSibling);

//Exo 8

console.log(
  document.querySelector("#textGeneral").nextElementSibling.nextElementSibling
);

//Exo 9
let divFooter = document.querySelector("#footer");

console.log(divFooter.lastElementChild.firstElementChild);

//Exo 10

let collectB = document.getElementsByTagName("b");

let lastB = collectB[collectB.length - 1];

console.log(
  lastB.parentNode.parentNode.previousElementSibling.querySelector("b")
);

//Exo 11

let eltGrandParaph = document.querySelector(".grandParagraphe");

//Exo 12
Array.from(document.querySelectorAll("li")).forEach((elt) => {
  console.log(elt);
});
