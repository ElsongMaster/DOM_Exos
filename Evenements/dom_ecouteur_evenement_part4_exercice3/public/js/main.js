//Exo 1

let h1 = document.querySelector("h1");

h1.addEventListener("click", () => {});
h1.setAttribute("class", "text-error");
//Exo 2

let h3 = document.querySelector("h3");

h3.addEventListener("dblclick", () => {
  h3.setAttribute("class", "text-error");
});

//Exo 3
let p = document.querySelector("p");
//console.log(p);
// p.addEventListener("click", () => {
//   let tabClass = Array.from(p.classList);
//   console.log(tabClass);
//   if (tabClass.includes("text-style")) {
//     let tabClassP = p.className.split(" ");
//     tabClassP.splice(tabClassP.indexOf("text-style"));
//     p.className = tabClassP.join(" ");
//   } else {
//     p.className += " text-style";
//   }
// });

//correctif

p.addEventListener("click", () => {
  p.classList.toggle("text-style");
});

//Exo 4

Array.from(document.querySelectorAll("p")[1].querySelectorAll("span")).forEach(
  (elt) => {
    elt.addEventListener("click", () => {
      elt.className = "bolder";
    });
  }
);

//Exo 5
let funct = (tab, node) => {
  tab.forEach((elt) => {
    if (node != elt) {
      if (elt.className.split(" ").includes("bolrder-red")) {
        elt.classList.remove("bolder-red");
      }
    }

    node.className = " bolder-red";
  });
};

let tabSpan = Array.from(document.querySelectorAll("p:last-of-type >span"));
for (let i in tabSpan) {
  tabSpan[i].addEventListener("click", () => {
    funct(tabSpan, tabSpan[i]);
  });
}

//correctif

let span = document.querySelectorAll("p")[2].children;
console.log(span);
let tabSpan = Array.from(span);

tabSpan[0].addEventListener("click", () => {
  tabSpan[0].setAttribute("class", "bolder-red");
  tabSpan[1].classList.remove("bolder-red");
  tabSpan[2].classList.remove("bolder-red");
});

tabSpan[1].addEventListener("click", () => {
  tabSpan[1].setAttribute("class", "bolder-red");
  tabSpan[0].classList.remove("bolder-red");
  tabSpan[2].classList.remove("bolder-red");
});

tabSpan[2].addEventListener("click", () => {
  tabSpan[2].setAttribute("class", "bolder-red");
  tabSpan[1].classList.remove("bolder-red");
  tabSpan[0].classList.remove("bolder-red");
});
