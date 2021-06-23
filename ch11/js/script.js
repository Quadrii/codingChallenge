let firstPlayer = document.querySelector('.player--0');
let nameOne = document.querySelector('#name--0');
let currentPlayerOne = document.querySelector('#current--0');
let playerOneScore = document.querySelector('#score--0');
let secondPlayer = document.querySelector('.player--1');
let nameTwo = document.querySelector('#name--1');
let currentPlayerTwo = document.querySelector('#current--1');
let playerTwoScore = document.querySelector('#score--1');
let diceBtn = document.querySelector('.dice');
let newBtn = document.querySelector('.btn--new');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');

// let totalScore = [0, 0];
// let activePlayer = 0;
// let playing = true;

// playerOneScore.textContent = 0;
// playerTwoScore.textContent = 0;
// diceBtn.classList.add('hidden');

const init = function () {
     totalScore = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    diceBtn.classList.add('hidden');

    currentPlayerOne.textContent = 0;
    currentPlayerTwo.textContent = 0;

    firstPlayer.classList.remove('player--winner');
    secondPlayer.classList.remove('player--winner');
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
};

init();

let switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent= 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    firstPplayer.classList.toggle('player--active');
    secondPlayer.classList.toggle('player--active');
    currentScore = 0;
}

rollBtn.addEventListener('click', function () {
    if (playing) {
        let diceNumber = Math.trunc(Math.random() * 6) + 1;
        diceBtn.classList.remove('hidden');
        diceBtn.src = `dice-${diceNumber}.png`;
        if (diceNumber === 1) {
            switchPlayer();
        }else {
            currentScore = currentScore + diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent= currentScore;
        }
    }
});

holdBtn.addEventListener('click', function () {
    if (playing) {
        totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
    if (totalScore[activePlayer] >= 20) {
        playing = false;
        diceBtn.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else {
        switchPlayer();
    }
  }
})

newBtn.addEventListener('click', init)