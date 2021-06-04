//Exo 1

let eltDiv = document.querySelector("#content");
let tabChildrenDiv = Array.from(eltDiv.children);
eltDiv.addEventListener("click", (e) => {
  if (tabChildrenDiv.includes(e.target)) {
    console.log(e.target);
  }
});

//Exo 2

eltDiv.addEventListener("dblclick", (e) => {
  if (tabChildrenDiv.includes(e.target)) {
    e.target.textContent = e.target.textContent.toUpperCase();
  }
});

//Exo 3

let input = document.querySelector("input");

let tabProperties = [
  "border:1px solid gold;",
  "background-color:blue;",
  "background-color:red;",
  "border:5px dotted gold;",
];
let index;

input.addEventListener("click", () => {
  index = Math.floor(Math.random() * tabChildrenDiv.length);
  tabChildrenDiv.forEach((elt) => {
    elt.setAttribute("style", `${tabProperties[index]}`);
  });
});
