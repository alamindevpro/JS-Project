const courses = [
 {
  name: 'JavaScript',
  price: '2.5'
 },
 {
  name: 'Python',
  price: '2.9'
 },
 {
  name: 'Java',
  price: '2.3'
 },
 {
  name: 'Php',
  price: '3.4'
 },
 {
  name: 'Rubi',
  price: '3.9'
 },
 {
  name: 'C',
  price: '5'
 },
]
//Load
window.addEventListener('load', generateItem);

//function
function generateItem() {
 const ul = document.querySelector('.list-group');
 ul.innerHTML = "";
 courses.forEach(course => {
  const li = document.createElement("li");
  li.classList = "list-group-item";

  const name = document.createTextNode(course.name);
  li.appendChild(name);

  const span = document.createElement("span");
  span.classList = "float-right";
  const price = document.createTextNode("$" + course.price);
  span.appendChild(price);
  li.appendChild(span);
  ul.appendChild(li);
 });
}

//sort btn
const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", (e) => {
 // courses.sort((a, b) => a.price - b.price);
 // generateItem();
 if (e.target.classList.contains('btn-dark')) {
  courses.sort((a, b) => a.price - b.price);
  generateItem();
  e.target.classList.remove("btn-dark");
  e.target.classList.add("btn-primary");
  e.target.innerText = "Random Course";
 } else {
  courses.sort((a, b) => b.price - a.price);
  generateItem();
  e.target.classList.remove("btn-primary");
  e.target.classList.add("btn-dark");
  e.target.innerText = "Sort Course";
 }
});

