//Exo 1
let myDiv = document.querySelector("#content");

let funct = (e) => {
  console.log(e);
};

let functBis = (e) => {
  e.target.style.border = "2px solid red";
};

myDiv.addEventListener("click", funct);

//Exo 2

myDiv.addEventListener("click", funct);

//Exo 3

document.addEventListener("click", functBis);
