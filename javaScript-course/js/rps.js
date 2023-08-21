let score = JSON.parse(localStorage.getItem('score'))||{
  win: 0,
  lose: 0,
  tie: 0
};



document.querySelector('.js-Score').innerHTML = `Wins: ${score.win}  Losses: ${score.lose}  Ties: ${score.tie }`;

document.querySelector('.js-Result').innerHTML = '';
document.querySelector('.js-Moves').innerHTML = '';




function playGame(playerChoice) {
let x = Math.random();
console.log(x);

if (x >= 0 && x < 1/3 && playerChoice === 'rock') {

    document.querySelector('.js-Result').innerHTML = `It's a tie`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML = `Wins: ${score.win}  Losses: ${score.lose}  Ties: ${score.tie += 1} `;}

if (x >= 0 && x < 1/3 && playerChoice === 'paper') {

    document.querySelector('.js-Result').innerHTML = `You win`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win += 1}  Losses: ${score.lose}  Ties: ${score.tie}`;}

if (x >= 0 && x < 1/3 && playerChoice === 'scissors') {

    document.querySelector('.js-Result').innerHTML = `You lose`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt="">(AI)`;
    
    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win}  Losses: ${score.lose += 1}  Ties: ${score.tie}`;
} 


if (x >= 1/3 && x < 2/3 && playerChoice === 'rock') { 

    document.querySelector('.js-Result').innerHTML = `You lose`;

    document.querySelector('.js-Moves').innerHTML = `(You)<img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt="">(AI)`;
    
    document.querySelector('.js-Score').innerHTML = `Wins: ${score.win}  Losses: ${score.lose += 1}  Ties: ${score.tie}`;
} 
if (x >= 1/3 && x < 2/3 && playerChoice === 'paper') {

    document.querySelector('.js-Result').innerHTML = `It's a tie`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML = `Wins: ${score.win}  Losses: ${score.lose}  Ties: ${score.tie += 1}`;
} 
if (x >= 1/3 && x < 2/3 && playerChoice === 'scissors') {

    document.querySelector('.js-Result').innerHTML = `You win`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win += 1}  Losses: ${score.lose}  Ties: ${score.tie}`;
} 

if (x >= 2/3 && x < 1 && playerChoice === 'rock') {

    document.querySelector('.js-Result').innerHTML = `You win`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/rock-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win += 1}  Losses: ${score.lose}  Ties: ${score.tie }`;
} 
if (x >= 2/3 && x < 1 && playerChoice === 'paper') {

    document.querySelector('.js-Result').innerHTML = `You lose`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/paper-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> (AI)`;

    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win}  Losses: ${score.lose += 1}  Ties: ${score.tie}`;
} 
if (x >= 2/3 && x < 1 && playerChoice === 'scissors') {

    document.querySelector('.js-Result').innerHTML = `It's a tie`;

    document.querySelector('.js-Moves').innerHTML = `(You) <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> - <img class="paper-icon" src="/javaScript-course/icons/scissors-emoji.png" alt=""> (AI)`;
    
    document.querySelector('.js-Score').innerHTML =  `Wins: ${score.win}  Losses: ${score.lose}  Ties: ${score.tie += 1}`;
} 

localStorage.setItem('score',JSON.stringify(score));

console.log( localStorage.getItem('score'));


}

function resetScore(){
document.querySelector('.js-Score').innerHTML = `Wins: 0  Losses: 0  Ties: 0 `;
localStorage.removeItem('score');
score = {
win: 0,
lose: 0,
tie: 0,
};

document.querySelector('.js-Result').innerHTML = ``;

    document.querySelector('.js-Moves').innerHTML = ``;

}