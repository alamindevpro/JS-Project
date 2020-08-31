
const colors = ["red", "yellow", "green", "blue", "orange", "#999", "violet", "indigo"]

const sec = document.querySelector('#section1');
const h1 = document.querySelector("h1");
const selectedColor = document.querySelector("#selectedColor");

for (let color of colors) {
 const box = document.createElement("div");
 box.classList.add("box");
 sec.appendChild(box);
 box.style.backgroundColor = color;

 box.addEventListener("click", function () {
  h1.innerText = "You have selected: ";
  selectedColor.innerText = box.style.backgroundColor;
  selectedColor.style.backgroundColor = box.style.backgroundColor;
 });
};

