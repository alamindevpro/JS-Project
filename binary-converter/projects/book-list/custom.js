/*
1. DOM selection
2. Event Listener
3. Basic Validation
4. Creating element
5. Append
*/

//DOM selection

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", (e) => {
 e.preventDefault();

 if (title.value == "") {
  alert('Please fill input form!');
 } else if (author.value == "") {
  alert('Please fill input form!');
 } else if (year.value == "") {
  alert('Please fill input form!');
 } else {
  const newRow = document.createElement('tr');
  // creating new title
  const newTitle = document.createElement('th');
  newTitle.innerHTML = title.value;
  newRow.appendChild(newTitle);
  // creating new author
  const newAuthor = document.createElement('th');
  newAuthor.innerHTML = author.value;
  newRow.appendChild(newAuthor);
  // creating new year
  const newYear = document.createElement('th');
  newYear.innerHTML = year.value;
  newRow.appendChild(newYear);

  //append th to tbody
  bookList.appendChild(newRow);
 }
});