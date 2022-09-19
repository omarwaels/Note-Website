let cardSection = document.querySelector("section.container div");

let addCard = document.createElement("div");
addCard.classList.add("col-12", "col-sm-6", "col-md-4");
addCard.style.height = "310px";
let allCards = document.querySelectorAll("div.card-body");
console.log(allCards);
let addMarkContainer = document.createElement("div");
let listButton = document.querySelector("div.container i.fa-bars");
let MenuButton = document.querySelector("div.container i.fa-square");

for (let i = 0; i < allCards.length; i++) {
  if (i % 3 == 0) {
    allCards[i].style.borderRadius = "10px";
    allCards[i].style.border = "3px solid yellow";
  }
  if (i % 3 == 1) {
    allCards[i].style.borderRadius = "10px";
    allCards[i].style.border = "3px solid orange";
  }
  if (i % 3 == 2) {
    allCards[i].style.borderRadius = "10px";
    allCards[i].style.border = "3px solid red";
  }
}

addMarkContainer.classList.add(
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
addMarkContainer.style.height = "250px";
let addMark = document.createElement("img");
addMark.classList.add("me-5", "addIco");
addMark.src = "insert.png";
addMark.style.width = "60px";
addMark.style.height = "60px";
cardSection.insertAdjacentElement("beforeend", addCard);
addCard.appendChild(addMarkContainer);
addMarkContainer.appendChild(addMark);
let cardContainer = document.querySelectorAll(
  "section.container div div.col-12"
);

listButton.addEventListener("click", showlist);
function showlist() {
  listButton.style.backgroundColor = "brown";
  MenuButton.style.backgroundColor = "transparent";
  cardSection.classList.replace("row", "d-flex-col");
  for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].style.width = "100%";
  }
}
