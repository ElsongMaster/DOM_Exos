//Exo 1
let mySecondH1 = document.getElementsByTagName("h1")[0];
let mySecondH1_text = mySecondH1.textContent;
console.log(mySecondH1_text);

//Exo2

console.log(document.getElementsByTagName("li")[3].textContent);

//Exo3

console.log(document.getElementsByTagName("p")[0].textContent.toUpperCase());

//Exo4
Array.from(document.getElementsByTagName("li")).forEach((elt) => {
  console.log(elt.textContent.toUpperCase());
});
