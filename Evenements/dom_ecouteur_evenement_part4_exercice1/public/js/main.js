//1
let h1 = document.querySelector("h1");
//2
let colorText = () => {
  h1.style.color = "blue";
};

h1.addEventListener("click", colorText);
