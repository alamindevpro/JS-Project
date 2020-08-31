//Variable
const result = document.getElementById("result");
const sumbit = document.getElementById("submit");


//Event-Listener
document.addEventListener("DOMContentLoaded", digitalClock);

//Function
function digitalClock() {
 let date = new Date();
 let hour = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 let timeFormat = "AM";

 if (hour === 0) {
  hour = 12;
 }
 if (hour > 12) {
  hour = hour - 12;
  timeFormat = "PM"
 }
 hour = hour < 10 ? "0" + hour : hour;
 minutes = minutes < 10 ? "0" + minutes : minutes;
 seconds = seconds < 10 ? "0" + seconds : seconds;

 let finalTime = `${hour}:${minutes}:${seconds}`;

 document.getElementById("time").innerText = finalTime;
 document.querySelector("small").innerText = timeFormat;

 setInterval(digitalClock, 1000);
}

