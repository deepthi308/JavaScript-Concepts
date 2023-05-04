const rollBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold');
const restartBtn = document.querySelectorAll('.new-game');
const dice = document.querySelector('.middle');
const dots = document.querySelectorAll('.dot');
const current1 = document.querySelector('.dice-num-1');
const current2 = document.querySelector('.dice-num-2');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const modal = document.querySelector('.win-modal');
const win = document.querySelector('.winner');
const quit = document.querySelector('.quit');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let count = 1;
let player1Score = 0;
let player2Score = 0;
let winner;
left.classList.add('active');
// Creating functionalities
function handleDiceRoll() {
    // debugger;
// count = 1;
    dots.forEach((dot) => {
        if (dot.classList.contains('hidden')) {
            dot.classList.remove('hidden');
        }
    })
    const randomNumber = Math.ceil(Math.random()*6);
    // debugger;
   
    if (randomNumber > 1 && count === 1) {
        if (right.classList.contains('active')) {
            right.classList.remove('active');
            left.classList.add('active');
        }
            current1.innerText = Number(current1.innerText) + randomNumber;
    }
    else if(randomNumber > 1 && count === 2) {
            current2.innerText = Number(current2.innerText) + randomNumber;
            if (left.classList.contains('active')) {
        left.classList.remove('active');
        right.classList.add('active'); 
        }
    }
    if (randomNumber === 1 && count === 2){
        current2.innerText = 0;
        count=1;
        if (right.classList.contains('active')) {
            right.classList.remove('active');
            left.classList.add('active');
        }
        
    }
     else if (randomNumber === 1 && count === 1) {
        current1.innerText = 0;
        count = 2;
        if (left.classList.contains('active')) {
        left.classList.remove('active');
        right.classList.add('active'); 
        }
        
    }
    
    const hiddenDots = 6 - randomNumber;
    for (let i = 1; i <= hiddenDots; i++){
        dots[i].classList.add('hidden');
    }
    // count++;
    console.log(count);
}

const handleHold = function () {
    if (count === 1) {
        player1Score = Number(result1.innerText);
        player1Score = Number(current1.innerText) + player1Score;
        result1.innerText = player1Score;
        current1.innerText = 0;
        if (player1Score >= 100) {
            winner = 'Player 1'
            win.innerText = winner;
            modal.style.visibility = 'visible';
        }
        
    }
    if (count  === 2) {
        player2Score = Number(result2.innerText);
        player2Score = Number(current2.innerText) + player2Score;
        result2.innerText = player2Score;
        current2.innerText = 0;
        if (player2Score >= 100) {
            winner = 'Player 2'
            win.innerText = winner;
            modal.style.visibility = 'visible';
        }
    }
}

const handleRestart = () => {
    modal.style.visibility = 'hidden';
    count = 1;
    player1Score = 0;
    result1.innerText = player1Score;
    player2Score = 0;
    result2.innerText = player2Score;
    current1.innerText = 0;
    current2.innerText = 0;
}

const handleQuit = () => {
    count = 1;
    player1Score = 0;
    player2Score = 0;
    current1.innerText = 0;
    current2.innerText = 0;
    window.close();
}

// Adding event handler to the buttons
dice.addEventListener('click', handleDiceRoll);
rollBtn.addEventListener('click', handleDiceRoll);
holdBtn.addEventListener('click', handleHold);
restartBtn.forEach((element) => {
    element.addEventListener('click', handleRestart);
});
quit.addEventListener('click', handleQuit);

