let myDiv = document.createElement("div");
let myH1 = document.createElement("h1");
let myH1_texte = document.createTextNode("Je suis un titre");
myH1.appendChild(myH1_texte);
let myH2 = document.createElement("h2");
let myH2_texte = document.createTextNode("Je suis un sous-titre!");
myH2.appendChild(myH2_texte);
let myInput = document.createElement("input");
let myButton = document.createElement("button");
let myButton_texte = document.createTextNode("Acceptez !");
myButton.appendChild(myButton_texte);

myDiv.appendChild(myH1);
myDiv.appendChild(myH2);
myDiv.appendChild(myInput);
myDiv.appendChild(myButton);

let myBody = document.querySelector("body");
myBody.appendChild(myDiv);

let eltAdjacent = document.querySelector("input ~button");
let eltChild = document.querySelector("div>h1");
console.log(eltAdjacent);
console.log(eltChild);

myH1.innerHTML = "Je suis un grand titre";
