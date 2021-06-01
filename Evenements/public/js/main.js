//Exo 1

let myButton = document.createElement("button");

let myButton_text = document.createTextNode("je suis un bouton");
myButton.appendChild(myButton_text);

myButton.addEventListener("click", () => {
  myButton.innerText = "j'ai été cliqué";
});
let body = document.querySelector("body");

body.appendChild(myButton);

//Exo 2

let mySecondButton = document.createElement("button");

let mySecondButton_text = document.createTextNode("Second bouton");
mySecondButton.appendChild(mySecondButton_text);

let cpt = 0;
mySecondButton.addEventListener("click", () => {
  cpt++;
  mySecondButton.innerText = `j'ai été cliqué ${cpt} fois`;
});

body.appendChild(mySecondButton);

//Exo3
let btn3 = document.createElement("button");
let title = document.createElement("h1");
title.textContent = "Bienvenue sur mon super site ";
btn3.textContent = "add title";
btn3.addEventListener("click", () => {
  body.appendChild(title);
});

body.appendChild(btn3);

//Exo 4

let btn4 = document.createElement("button");
let btnAdded = document.createElement("button");
btnAdded.textContent = "btn added";
btn4.textContent = "add button";
btn4.addEventListener("click", () => {
  body.appendChild(btnAdded);
});

body.appendChild(btn4);

//Exo5

let btn5 = document.createElement("button");
let p = document.createElement("p");
p.textContent = "blablablablablablablablablablablablabla";
btn5.textContent = "modifier la couleur du paragraphe";
btn5.addEventListener("click", () => {
  p.style.color = "blue";
});

body.append(p, btn5);

//Exo 6

let btn6 = document.createElement("button");
let h2 = document.createElement("h2");
btn6.textContent = "ajouter h2";
h2.textContent = "Je lance une function";

let funct = () => {
  body.appendChild(h2);
  let btnModif = document.createElement("button");
  btnModif.textContent = "modifier le titre Exo 06";
  btnModif.addEventListener("click", () => {
    h2.style.color = "green";
  });
  body.appendChild(btnModif);
};
btn6.addEventListener("click", funct);
body.appendChild(btn6);
