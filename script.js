// script.js
const card = document.querySelector(".card");

card.addEventListener("click", function () {
  card.classList.toggle("flipped");
});

const heading = document.querySelector("h1");
const name = heading.textContent.replace("멋사 12기", "");

const greetingElement = document.querySelector("#greeting");
greetingElement.textContent = `${name}님 ${greetingElement.textContent}`;
