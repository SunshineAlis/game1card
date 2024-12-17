// Part one
// 1. value array, card append

// Part two
// 2. shuffle holoih

// part three
// 1. addeventlistener each one of the card

//  part four
// 1. flip function

// part five
// 1. match check match

// part six
// 1.unflip function and

// part seven
// 1. if matched disableCards funtion

// part eight
// 1. reset fucntion bichih
const gameContainer = document.getElementById("gameContainer");

const cardValues = [
  "🤥",
  "🤥",
  "😁",
  "😁",
  "😇",
  "😇",
  "💑",
  "💑",
  "😁",
  "😁",
  "🤣",
  "🤣",
  "🧐",
  "🧐",
  "😎",
  "😎",
];
function shuffle(array) {
  for (let i = array.length; i < array.length - 1; i = 0) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffle(cardValues);

cardValues.forEach((value) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = value;
  card.innerHTML = '<span class="hidden">' + value + "</span>";

  gameContainer.appendChild(card);
});

//handle card event
let firstCard = null;
let secondCard = null;
let lockBoard = false;

//Handlecard click;

function flipCard(event) {
  if (lockBoard) return;
  const clickedCard = event.target;

  //ignore if the same card is clicked twice
  if (clickedCard === firstCard) return;

  //flip the card
  clickedCard.classList.add("flipped");
  clickedCard.querySelector("span").classList.remove("hidden");

  if (!firstCard) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;
    checkForMatch();
  }
}
//part5 match check match
function checkForMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.values;
  isMatch ? disableCards() : unflipCards();
}
//part 6 1.unflip function and
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classlist.remove("flipped");
    firstCard.querySelector("span").classList.add("hidden");
    secondCard.classList.remove("flipped");
    secondCard.querySelector("span").classList.add("hidden");
    resetBoard();
  });
}
//part7 1.if Matched disableCards function
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
const array = document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", flipCard);
});
