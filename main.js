const allCards = document.querySelectorAll("#card");

let flippedCards = [];
let linkedCards = [];

allCards.forEach(card => {
card.addEventListener("click", flipChoosenCard)
});

function flipCard() {
if (flippedCards.length < 2 && !this.classList.contains('flipped') && !linkedCards.includes(this)) {
this.classList.add('flipped');
flippedCards.push(this);
  
if (flippedCards.length === 2) {
setTimeout(checkMatch, 1000);
}
}
}