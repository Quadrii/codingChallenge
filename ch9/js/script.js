let secret = Math.trunc(Math.random()* 20)+ 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;


document.querySelector('.action').addEventListener('click', function () {
    let guess = Number(document.querySelector('.check').value);
    if (!guess) {
        console.log('Why can\'t you just type a number')
    }
    else if (guess === secret) {
        document.querySelector('.message').textContent='Wow You Guess right';
        document.querySelector('.secretNumber').textContent = secret;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.body.style.backgroundColor = "green";
    }

    else if (guess > secret) {
        if (score > 1) {
            document.querySelector('.score').textContent = score--;
            document.querySelector('.message').textContent='Too High!';
        }
        else {
            document.querySelector('.message').textContent='You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secret) {
        if (score > 1) {
            document.querySelector('.score').textContent = score--;
            document.querySelector('.message').textContent='Too Low!';
        }
        else {
            document.querySelector('.message').textContent='You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else {
        document.querySelector('.score').textContent = score;
    }

});

document.querySelector('.restart').addEventListener('click', function () {
    secret = Math.trunc(Math.random()* 20)+ 1;
    score = 20;
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = "black";
    Number(document.querySelector('.check').value = '');
    document.querySelector('.message').textContent = 'start Guessing';
});