let allNotes = [];
let userInfo = {
  username: "omar wael",
  password: "0123456",
  phone: "01154615235",
};

// let note = {
//   Title: "Note title",
//   Date: "Note date",
//   abbrev: "Some quick example",
//   notevalue: "white",
//   favourite: false,
// };
let notes = JSON.parse(localStorage.getItem("1"));

console.log(notes);
if (notes != null) {
  for (var i in notes) {
    allNotes.push(notes[i]);
  }
} else {
  allNotes.push(userInfo);
}
const num = allNotes.length;
console.log(notes);

localStorage.setItem("1", JSON.stringify(allNotes));
// allNotes.push(note);

console.log(allNotes.length, "Allnote length", notes.length, "note length");
// createNote()

let cardSection = document.querySelector("section.container div");

let addCard = document.createElement("div");
let globalsaveind = 0;
addCard.classList.add("col-12", "col-sm-6", "col-md-4");
addCard.style.height = "310px";
let allCards = Array.from(document.querySelectorAll("div.card-body"));
let globalindex2 = 0;
let addMarkContainer = document.createElement("div");
let listButton = document.querySelector("div.container i.fa-bars");
let MenuButton = document.querySelector("div.container i.fa-square");
let noteContainer = document.querySelector("div.noteviewer");
let icoNoteContainer = document.querySelector("div.noteviewer div i");
let delay = document.querySelector("div.noteviewer div div div.spinner-border");
let saveButton = document.querySelector(
  "div.noteviewer div div div button.btn"
);
let remove = document.querySelectorAll("div.card-body div a");

let rightMark = document.querySelector("div.noteviewer div div div i.fa-check");

function delays(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function borderColor() {
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
}
borderColor();

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
let titleOfNote = Array.from(
  document.querySelectorAll("div.card-body h5 span")
);

for (let i = 1; i < num; i++) {
  let clone = cardContainer[0].cloneNode(true);
  clone.style.display = null;
  addCard.insertAdjacentElement("beforebegin", clone);
  allCards = Array.from(document.querySelectorAll("div.card-body"));
  dateOfLastCard = document.querySelectorAll("div.card-body h6.card-subtitle");
  AbbrevOfLastCard = document.querySelectorAll("div.card-body p");
  abrevOfLastCard = document.querySelectorAll("div.card-body p");
  titleOfNote = Array.from(document.querySelectorAll("div.card-body h5 span"));
  cardContainer = document.querySelectorAll("section.container div div.col-12");
  abrevOfLastCard[abrevOfLastCard.length - 1].textContent = `Empty`;
  let d = new Date();
  dateOfLastCard[dateOfLastCard.length - 1].textContent = d.toUTCString();
  allCards = Array.from(document.querySelectorAll("div.card-body"));
  AbbrevOfLastCard[i].textContent = notes[i]["abbrev"];
  titleOfNote[i].textContent = notes[i]["Title"];
  borderColor();
  showAndHidecontent();
}
////////////////////////////////////////////////////////////////////////////////////////
listButton.addEventListener("click", showlist);
function showlist() {
  listButton.style.backgroundColor = "orange";
  MenuButton.style.backgroundColor = "transparent";
  cardSection.classList.replace("row", "d-flex-col");
  for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].style.width = "100%";
  }
}
MenuButton.addEventListener("click", showMenu);
function showMenu() {
  listButton.style.backgroundColor = "transparent";
  MenuButton.style.backgroundColor = "orange";
  cardSection.classList.replace("d-flex-col", "row");
  for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].style.width = null;
  }
}
cardContainer = Array.from(
  document.querySelectorAll("section.container div div.col-12")
);
function showAndHidecontent() {
  console.log(cardContainer, "card container");
  for (let i = 0; i < cardContainer.length - 1; i++) {
    cardContainer[i].addEventListener("click", showNoteContent);
  }

  icoNoteContainer.addEventListener("click", hideNoteContent);
  function showNoteContent(e) {
    noteContainer.style.display = "block";
  }
  function hideNoteContent() {
    noteContainer.style.display = "none";
  }
  Textarea = document.querySelector("form textarea");
  Textarea.value = " ";
}
showAndHidecontent();

saveButton.addEventListener("click", showDelay);
async function showDelay() {
  delay.style.display = "block";
  await delays(500);
  hideDelay();
  rightMark.style.display = "inline";
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
function hideDelay() {
  delay.style.display = "none";
}

let addIco = document.querySelector("img.addIco");
let clone = cardContainer[0].cloneNode(true);

let newNote = document.createElement("div");
let savedItems = [];
addIco.addEventListener("click", createNote);
function createNote() {
  let clone = cardContainer[0].cloneNode(true);
  clone.style.display = null;
  addCard.insertAdjacentElement("beforebegin", clone);
  allCards = Array.from(document.querySelectorAll("div.card-body"));
  dateOfLastCard = document.querySelectorAll("div.card-body h6.card-subtitle");
  abrevOfLastCard = document.querySelectorAll("div.card-body p");
  cardContainer = document.querySelectorAll("section.container div div.col-12");
  abrevOfLastCard[abrevOfLastCard.length - 1].textContent = `Empty`;
  let d = new Date();
  dateOfLastCard[dateOfLastCard.length - 1].textContent = d.toUTCString();
  allCards = Array.from(document.querySelectorAll("div.card-body"));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Created",
    showConfirmButton: false,
    timer: 1500,
  });
  borderColor();
  showAndHidecontent();
  saveoperation();

  let newnote = {
    Title: "Note title",
    abbrev: "Some quick example",
    notevalue: " ",
  };
  allNotes.push(newnote);
  console.log(allNotes, "sasa");
  localStorage.setItem("1", JSON.stringify(allNotes));
  showContent();
  removes();
  cards = Array.from(document.querySelectorAll("section div div.col-12")); /////////////////
  searching();
  displaytitle();
}
function showContent() {
  allCards = Array.from(document.querySelectorAll("div.card-body"));
  notes = JSON.parse(localStorage.getItem("1"));
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener("click", openNote);
  }
  function openNote(e) {
    let index = allCards.indexOf(e.currentTarget);

    Textarea = document.querySelector("form textarea");
    console.log(index);

    Textarea.value = notes[index]["notevalue"];
  }
}
showContent();

function removes() {
  removeButtons = Array.from(document.querySelectorAll("div.card-body div a"));
  cardContainer = document.querySelectorAll("section.container div div.col-12");

  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeNote);
  }
  function removeNote(e) {
    let index = removeButtons.indexOf(e.currentTarget);
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        console.log(index, typeof index);

        cardContainer[index].remove();
        removeButtons = Array.from(
          document.querySelectorAll("div.card-body div a")
        );
        cardContainer = document.querySelectorAll(
          "section.container div div.col-12"
        );
        allNotes.splice(index, 1);
        localStorage.setItem("1", JSON.stringify(allNotes));
      }
    });
  }
}
removes();

allCards = Array.from(document.querySelectorAll("div.card-body"));
console.log(allCards, "sasa");
function saveoperation() {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener("click", adjustSaving);
  }
  function adjustSaving(e) {
    globalsaveind = allCards.indexOf(e.currentTarget);
    saveButton.addEventListener("click", saveInfo);
  }

  function saveInfo() {
    console.log(globalsaveind);
    AbbrevOfLastCard = document.querySelectorAll("div.card-body p");
    notes[globalsaveind]["notevalue"] = Textarea.value;
    console.log(notes[globalsaveind], "sasa");
    let textInAbreviation = " ";
    if (Textarea.value == "") {
      textInAbreviation = "Empty";
    } else if (Textarea.value.length < 25) {
      textInAbreviation = Textarea.value + " .....";
    } else if (Textarea.value.length >= 25) {
      textInAbreviation = Textarea.value.slice(0, 26) + " .....";
    }
    notes[globalsaveind]["abbrev"] = textInAbreviation;

    allNotes[globalsaveind] = notes[globalsaveind];

    localStorage.setItem("1", JSON.stringify(allNotes));
    AbbrevOfLastCard[globalsaveind].textContent = textInAbreviation;
  }
}
saveoperation();

function displaytitle() {
  let editTitle = Array.from(
    document.querySelectorAll("i.fa-solid.fa-pen-to-square")
  );
  let titlePage = document.querySelector(".titleInputPage");
  let titlePageButton = document.querySelector("div.titleInputPage div button");
  let titlePageTextarea = document.querySelector(
    "div.titleInputPage div textarea"
  );
  titleOfNote = Array.from(document.querySelectorAll("div.card-body h5 span"));

  for (let i = 0; i < editTitle.length; i++) {
    editTitle[i].addEventListener("click", showTitlePage);
  }
  function showTitlePage(e) {
    e.stopPropagation();
    globalindex2 = editTitle.indexOf(e.currentTarget);

    titlePage.style.display = "block";
    titlePageButton.addEventListener("click", changetitle);
  }
  function changetitle() {
    titleOfNote[globalindex2].textContent = titlePageTextarea.value;
    notes[globalindex2]["Title"] = titlePageTextarea.value;
    titlePage.style.display = "none";
    allNotes[globalindex2] = notes[globalindex2];
    localStorage.setItem("1", JSON.stringify(allNotes));
  }
}
displaytitle();

////////////////////////////////////////////////////////////////////////////////////////////////
function searching() {
  let searchTextArea = document.querySelector("input.form-control");
  let searchButton = document.querySelector("form button.btn-outline-success");
  console.log(searchButton, "heeloo");
  titleOfNote = Array.from(document.querySelectorAll("div.card-body h5 span"));
  cards = Array.from(document.querySelectorAll("section div div.col-12"));
  searchButton.addEventListener("click", search);
  function search() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Done",
      showConfirmButton: false,
      timer: 1500,
    });
    if (searchTextArea.value == "") {
      for (let i = 1; i < cards.length - 1; i++) {
        cards[i].style.display = "block";
      }

      return;
    }
    console.log(searchTextArea.value);
    let searchText = searchTextArea.value;
    console.log(searchText, "search text");
    let trueindix = [];
    for (let i = 1; i < titleOfNote.length; i++) {
      console.log(titleOfNote[i].textContent);
      if (titleOfNote[i].textContent.includes(searchText)) {
        trueindix.push(i);
      }
    }
    console.log(cards, "same");
    for (let i = 1; i < cards.length - 1; i++) {
      if (trueindix.includes(i)) {
        cards[i].style.display = "block";
        continue;
      }
      cards[i].style.display = "none";
    }
    trueindix = [];
  }
}
searching();
