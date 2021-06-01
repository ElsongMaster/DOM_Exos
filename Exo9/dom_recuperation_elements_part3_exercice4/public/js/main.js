//Exo 1

let elements = document.querySelectorAll("#liste-competences >h2");

console.log(elements);

let competences = {
  HTML: "71%",
  CSS: "95%",
  JS: "50%",
  React: "18%",
  Laravel: "100%",
};

//Exo 2

let tab = Array.from(elements);
let tabValues = Object.values(competences);
for (let i in tab) {
  tab[i].innerHTML += " " + tabValues[i];
}

//Exo 3

for (let i in tab) {
  //   console.log(i);
  //   console.log(tabValues[i].split("%")[0]);
  if (parseInt(tabValues[i]) < 50) {
    tab[i].setAttribute("style", "background-color:red");
  } else if (parseInt(tabValues[i]) > 50 && parseInt(tabValues[i]) < 100) {
    tab[i].setAttribute("style", "background-color:green; color:white;");
  } else if (parseInt(tabValues[i]) == 100) {
    tab[i].setAttribute("style", "background-color:gold");
  }
}
