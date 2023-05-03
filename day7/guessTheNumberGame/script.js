'use strict';

const userInput = document.querySelector('.user-num')
const crtNum = document.querySelector('.crt-num')
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const score = document.querySelector('.score-val');
const highScore = document.querySelector('.high-score-val');
const tip = document.querySelector('.tip');
const result = document.querySelector('.result');
const body = document.getElementsByTagName('body');

let correctNumber = Math.ceil(Math.random() * 20);
const scores = [0];
    let scoree = 20;
    let high = 0;
function checkHighScore(scores) {
    return Math.max(...scores);
}

function giveTip(correctNumber, userNumber) {
    if (correctNumber < userNumber) {
        return 'Your number is greater'
    }
    if (correctNumber > userNumber) {
        return 'Your number is lesser'
    }
}

const checkSimilarity = (correctNumber, userNumber) => {

    if (correctNumber === userNumber) {
        body[0].style.backgroundColor = 'rgb(0, 77, 0)';
        tip.innerText = ''
        crtNum.innerText = correctNumber;
        result.innerText = 'Correct Number 🎉';
        scoree = scoree + 10
        score.innerText = scoree;
        scores.push(scoree);
        high = checkHighScore(scores);
        highScore.innerText = high;
    } else {
        const hint = giveTip(correctNumber,userNumber);
        tip.innerText = hint;
        result.innerText = 'Wrong Number 🚴‍♀️';
        if (scoree >= 1) {
        scoree = scoree - 1
        score.innerText = scoree;
        scores.push(scoree);
        } else {
            result.innerText = 'You Lost 😏';
            tip.innerText = ''
            userInput.value = ''
        }
        high = checkHighScore(scores);
        highScore.innerText = high;   
    }
    console.log(score.innerText)
}

const handleCheck = function (e) {
    const userNumber = Number(userInput.value);
    if (correctNumber && userNumber && typeof userNumber === 'number' && checkBtn.innerText === 'CHECK!') {
        checkSimilarity(correctNumber, userNumber);
    } else if (checkBtn.innerText === 'TRY AGAIN!') {
        userInput.value = '';
        checkBtn.innerText = 'CHECK!'
    } else if(checkBtn.innerText === 'CHECK!'){
        checkBtn.innerText = 'TRY AGAIN!'
    }
    
}

const handlePlayAgain = () => {
    body[0].style.backgroundColor = '#130f40';
    correctNumber = Math.ceil(Math.random() * 20);
    crtNum.innerText = '?';
    userInput.value = '';
    score.innerText = 0;
    highScore.innerText = checkHighScore(scores);
    tip.innerText = '';
    result.innerText = 'Result';
    userInput.focus();
    // console.log(correctNumber);
}

checkBtn.addEventListener('click', handleCheck);

againBtn.addEventListener('click', handlePlayAgain)

// console.log(correctNumber);

// console.log(score.innerText);
// console.log(body);
// console.log(body[0].style.backgroundColor);

// Refractoring is the process which is done to eliminate  the repeataion of the same code inorder to improve the original code