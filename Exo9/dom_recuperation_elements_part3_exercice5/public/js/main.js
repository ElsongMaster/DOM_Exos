let softSkills = {
  Trello: "49%",
  Git: "87%",
  GitHub: "50%",
  Discord: "15%",
};

//Exo 1
let elements = document.querySelectorAll("#liste-soft-skills >h2");

console.log(elements);

//Exo 2
let tabIndex = [];
let tabKeys = Object.keys(softSkills);
let tabValues = Object.values(softSkills);
for (let i in elements) {
  for (let j in tabKeys) {
    if (elements[i].textContent == tabKeys[j]) {
      elements[i].innerText += " " + tabValues[j];
      tabIndex.push(j);
    }
  }
}

//Exo 3
for (let i in elements) {
  //   console.log(i);
  //   console.log(tabValues[i].split("%")[0]);
  if (parseInt(tabValues[tabIndex[i]]) < 50) {
    elements[i].setAttribute("style", "background-color:red");
  } else if (
    parseInt(tabValues[tabIndex[i]]) > 50 &&
    parseInt(tabValues[tabIndex[i]]) < 100
  ) {
    elements[i].setAttribute("style", "background-color:green; color:white;");
  } else if (parseInt(tabValues[tabIndex[i]]) == 100) {
    elements[i].setAttribute("style", "background-color:gold");
  }
}
