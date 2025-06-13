let RollDice = document.querySelector(".Roll-Dice");
let Emoji = document.querySelector(".Emoji");
let value = document.querySelector(".value");

let arr = ['🕑', '🕑', '🕒', '🕓', '🕔', '🕕'];


RollDice.addEventListener('click', () =>
{
    let rendom = Math.floor(Math.random() * 6);
    let DieFace = arr[rendom];
    Emoji.textContent  = DieFace;
    value.textContent  = `You Rolled: ${rendom + 1}`;

})