//Variable
const result = document.getElementById("result");
const sumbit = document.getElementById("submit");


//Event-Listener
sumbit.addEventListener("click", binary);

//Function
function binary(e) {
 e.preventDefault();

 const num = document.getElementById("number").value;
 if (num === "") {
  alert("Please enter a number");
 } else if (num < 0) {
  alert("Please enter a positive number");
 } else {
  result.style.visibility = "visible";
 }

 //converting
 const binaryNumber = Number(num).toString(2);
 result.innerText = binaryNumber;
}
