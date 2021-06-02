let h1 = document.querySelector("h1");

h1.addEventListener("dblclick", () => {
  h1.style.backgroundColor = "red";
  h1.style.color = "white";
});

let h3 = document.querySelector("h3");
h3.addEventListener("mouseover", () => {
  h3.textContent = h3.textContent.substr(0, h3.textContent.length - 1);
});

let p = document.querySelector("p");

p.addEventListener("click", () => {
  p.style.backgroundColor = "blue";
  if (p.style.color == "gold") {
    p.style.color = "black";
  } else {
    p.style.color = "gold";
  }
});
