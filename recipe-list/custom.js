const form = document.querySelector("#recipe-form");
const recipe = document.querySelector("#recipe");
const filter = document.querySelector("#filter");
const clearRecipe = document.querySelector(".clear-recipe");
const collection = document.querySelector("#collection");

//Event loader function
loadEventListeners();

//Define loadEventListeners();
function loadEventListeners() {
 // add event
 form.addEventListener("submit", addRecipe);

 //remove event
 collection.addEventListener("click", removeRecipe);

 //clear recipe
 clearRecipe.addEventListener("click", clearAllRecipe);

 //filter recipe
 filter.addEventListener("keyup", filterRecipe);

}

//add recipe function
function addRecipe(e) {
 e.preventDefault();
 if (recipe.value === "") {
  alert("Add Recipe..!");
 } else {
  //create li element
  const li = document.createElement("li");
  // add class
  li.classList = "nav-item bg-primary py-2 px-3 mb-2 recipeItem";
  // append child
  li.appendChild(document.createTextNode(recipe.value));
  //create btn
  const link = document.createElement("a");
  link.style.marginLeft = "93%";
  link.classList = "remove-recipe";
  link.style.cursor = "pointer";
  link.appendChild(document.createTextNode("X"));
  //append to li
  li.appendChild(link);
  //append to collection
  collection.appendChild(li);

 }
}

//remove recipe function
function removeRecipe(e) {
 if (e.target.classList.contains("remove-recipe")) {
  if (confirm("Are you sure??")) {
   e.target.parentElement.remove();
  }
 }
}

//clear recipe function
function clearAllRecipe(e) {

 while (collection.firstChild) {
  collection.removeChild(collection.firstChild);
 }
 // console.log(collection.firstChild);
 e.preventDefault();
}

//filter recipe function
function filterRecipe(e) {
 const text = e.target.value.toLowerCase();

 // ul node collection 
 document.querySelectorAll(".recipeItem").forEach(function (recipe) {
  const item = recipe.firstChild.textContent.toLowerCase();
  if (item.indexOf(text) != -1) {
   recipe.style.display = "block";
  } else {
   recipe.style.display = "none";
  }
 });
}


// --- Done ! ---