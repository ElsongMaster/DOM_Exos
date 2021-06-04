//Exo 1

document.body.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == "DIV" && e.target.id == "content") {
    e.target.style.border = "solid 2px yellow";
  } else if (e.target.tagName == "P") {
    e.target.setAttribute("style", "font-weight:bold; color:red;");
  } else if (e.target.tagName == "H1") {
    e.target.setAttribute("style", "text-decoration:underline;");
  } else if (e.target.tagName == "H2") {
    e.target.textContent = e.target.textContent.substr(
      0,
      e.target.textContent.length - 1
    );
  }
});

//Exo 2

let textP =
  "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice ! ";

let lastP = document.querySelectorAll("p")[1];
console.log(lastP);
lastP.addEventListener("mouseover", (e) => {
  e.target.innerText = textP;
});
