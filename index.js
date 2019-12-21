function generateRandomNumberFromOneToSix(number) {
  number = number * 6;
  number = Math.floor(number) + 1;
  return number;
}

function gameStart() {
  var firstRandomNumber = Math.random();
  var firstResult = generateRandomNumberFromOneToSix(firstRandomNumber);

  var secondRandomNumber = Math.random();
  var secondResult = generateRandomNumberFromOneToSix(secondRandomNumber);

  function displayDiceForPlayerOne(number) {
    if (number == 1) {
      document.getElementById("playerOne").src = "images/dice1.png";
    } else if (number == 2) {
      document.getElementById("playerOne").src = "images/dice2.png";
    } else if (number == 3) {
      document.getElementById("playerOne").src = "images/dice3.png";
    } else if (number == 4) {
      document.getElementById("playerOne").src = "images/dice4.png";
    } else if (number == 5) {
      document.getElementById("playerOne").src = "images/dice5.png";
    } else {
      document.getElementById("playerOne").src = "images/dice6.png";
    }
  }


  function displayDiceForPlayerTwo(number) {
    if (number == 1) {
      document.getElementById("playerTwo").src = "images/dice1.png";
    } else if (number == 2) {
      document.getElementById("playerTwo").src = "images/dice2.png";
    } else if (number == 3) {
      document.getElementById("playerTwo").src = "images/dice3.png";
    } else if (number == 4) {
      document.getElementById("playerTwo").src = "images/dice4.png";
    } else if (number == 5) {
      document.getElementById("playerTwo").src = "images/dice5.png";
    } else {
      document.getElementById("playerTwo").src = "images/dice6.png";
    }
  }

  function displayResult(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
      document.querySelector("h1").innerHTML = "Draw";
    } else if (firstNumber > secondNumber) {
      document.querySelector("h1").innerHTML = "Player 1 Win!";
    } else {
      document.querySelector("h1").innerHTML = "Player 2 Win!";
    }
  }

  displayDiceForPlayerOne(firstResult);
  displayDiceForPlayerTwo(secondResult);
  displayResult(firstResult, secondResult);
}
