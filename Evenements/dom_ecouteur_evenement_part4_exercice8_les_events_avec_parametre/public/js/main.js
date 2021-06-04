// Exo 1

let functReplace = (TextARemplacer, remplacant) => {
  TextARemplacer.innerText = remplacant.innerText;
};

let h1 = document.querySelector("h1");
let p = document.querySelector("section").children[0];
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  functReplace(p, h1);
});

//Exo 2

let bg;
let color;
let colorGoldRed = (node, bg, color) => {
  node.setAttribute("style", `${bg} ${color}`);
};

h1.addEventListener("click", (e) => {
  bg = "background-color:gold;";
  color = "color:red;";
  colorGoldRed(e.target, bg, color);
});
