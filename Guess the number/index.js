let randomNumber = parseInt(Math.random() * 100 + 1);
const btn = document.querySelector('.btn');
const userInp = document.querySelector('.inp');
const prevGuess = document.querySelector('.prevGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');
const remaining = document.querySelector('.guessRem');
const result = document.querySelector('.result');

let cnt = 0;
let playGame = true;
let prevArr = []; 
const p = document.createElement('p');

if(playGame) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInp.value);
        validateGuess(guess);
    })
    
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert(`Please enter a Vlaid Number`);
    }
    else if(guess < 1) {
        alert(`Please enter the number greater than 1`);   
    }
    else if(guess > 100) {
        alert(`Please enter the number less than 100`);   
    }
    else {
        prevArr.push(guess);
        displayGuess(guess);
        if(cnt === 10) {
            checkTheGuess(guess);
            displayMessage(`Game Over. Random Number is ${randomNumber}`);
            endGame();
        }
        else {
            checkTheGuess(guess);
        }
    }
}

function checkTheGuess(guess) {
    if(guess === randomNumber) {
        displayMessage("You guessed it Right!");
    }
    else if(guess < randomNumber) {
        displayMessage("Guessed value is too low");
    }
    else {
        displayMessage("Guessed value is too high");
    }
}

function displayGuess(guess) {
    userInp.value = '';
    prevGuess.innerHTML += `${guess}  `;
    cnt++;
    remaining.innerHTML = `Guess Remaining : ${10 - cnt}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
    // const para = document.createElement('p'); 
    // para.appendChild(document.createTextNode(`${message}`));
    // lowOrHigh.appendChild(para);
}

function endGame() {
    userInp.value = '';
    userInp.setAttribute('disabled', '');
    
    p.classList.add('butotn')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    startGame();
}

function startGame() {
    const startbnt = document.querySelector('#newGame');
    startbnt.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        userInp.value = '';
        prevArr = [];
        cnt = 0;
        prevGuess.innerHTML = 'Prev Guess : ';
        remaining.innerHTML = `Guess Remaining : ${10 - cnt}`;
        userInp.removeAttribute('disabled');
        result.removeChild(p);
        lowOrHigh.innerHTML = "";
        playGame = true;
    });
}