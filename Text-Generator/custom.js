// Dummy Text
const dummyText = [
 "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia.",
 "9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo rem ad.Vero officiis aspernatur consectetur dolorem fugiat,laudantium mollitia."
];

//Selection element
const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const result = document.querySelector("#result");

//event listener
form.addEventListener("submit", e => {
 e.preventDefault();
 const value = parseInt(amount.value);
 const random = Math.floor(Math.random() * dummyText.length);

 // for empty, nagetive & greater then 9
 if (isNaN(value) || value <= 0 || value > 9) {
  result.innerHTML = `<p>${dummyText[random]}</p>`;
 } else {
  const slicedArray = dummyText.slice(0, value);
  const finalArray = slicedArray.map((singleDummy) => {
   return `<p>${singleDummy}</p>`;
  }).join("");

  result.innerHTML = finalArray;
 }
});