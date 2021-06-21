let calcAverageScore = (a, b, c) =>  (a + b + c) / 3;

let dolphinsAverageScore = calcAverageScore(44, 23, 71);
let koalasAverageScore = calcAverageScore(65, 54, 49);

  console.log(dolphinsAverageScore, koalasAverageScore);

  function checkWinner(dolphins, koalas) {
    if (dolphins >= 2 * koalas) {
        console.log('dolphin\s team wins')
    } else if (koalas >= 2 * dolphins){
        console.log('Koala\s team win')
    }
    else {
        console.log('No team wins')
    }
  }

  checkWinner(dolphinsAverageScore, koalasAverageScore)
  checkWinner(200, 400)