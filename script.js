'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const ansMessage = document.querySelector('.ans');
const againBtn = document.querySelector('.again');

againBtn.addEventListener('onclick', ()=>window.location.reload()) ;


// 1 to 20
const ans = Math.round(Math.random() * 20);

// Check event
const checkEvent = document.querySelector('.check').addEventListener('click', checkNum);

const scoreDecrease = () => {
    if (Number(score.textContent) <= 1) {
        alert("LOSE THE GAME");
    }
    score.textContent = Number(score.textContent) - 1;
}



// Set cookie function
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get cookie function
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

highscore.textContent= getCookie('highscore');

function checkNum() {
    let userInput = Number(guess.value);
    if (ans === userInput) {
        message.textContent = "WINNER";
        ansMessage.textContent = ans;
        document.body.setAttribute("style", "background-color: #60b347; color:white");
        
        const highscoreValue = getCookie("highscore");
        if (Number(score.textContent) > Number(highscoreValue)) {
            setCookie("highscore", score.textContent, 60);
        }
    } else if (ans > userInput) {
        message.textContent = 'Input is too low';
        console.log('Input is too low');
    } else {
        message.textContent = 'Input is too high';
        console.log('Input is too high');
    }
    scoreDecrease();
}
