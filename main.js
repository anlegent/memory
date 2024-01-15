const allCards = document.querySelectorAll('.card');

let flippedCards = [];

function cardFlip() {
if (this.classList.contains('matched') || this.classList.contains('flipped')) {
return;
}
flippedCards.push(this);

this.textContent = this.dataset.number;

if (flippedCards.length === 2) {

allCards.forEach(card => card.removeEventListener('click', cardFlip));


if (flippedCards[0].dataset.number === flippedCards[1].dataset.number) {

flippedCards.forEach(card => card.classList.add('matched'));


flippedCards = [];


if (document.querySelectorAll('.card:not(.matched)').length === 0) {
alert('You won!');
}
} else {

setTimeout(() => {

flippedCards.forEach(card => {
card.textContent = '';
card.classList.remove('flipped');
});


flippedCards = [];

allCards.forEach(card => card.addEventListener('click', cardFlip));
}, 1000);
}
}

this.classList.add('flipped');
}

allCards.forEach(card => card.addEventListener('click', cardFlip));
