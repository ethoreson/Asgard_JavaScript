//backend:
function Game(guessesLeft, winLossStatus, correctlyGuessed, answerTally) {
  this.guessesLeft = guessesLeft;
  this.winLossStatus = winLossStatus;
  this.correctlyGuessed = correctlyGuessed;
  this.answerTally = answerTally;
}

var wordArray = ["elf", "dwarves", "giant", "bright", "myth", "light", "darkest", "dragon", "earth", "epicodus"];
var alreadyGuessed = [];
Game.prototype.selectWord = function(wordArray) {
  var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  return word;
};

Game.prototype.generateArray = function(word) {
  var wordArray = word.split('');
  return wordArray;
}

Game.prototype.populateBlanks = function(word) {
  for (var i=0; i<word.length; i++) {
    this.correctlyGuessed.push("_");
  }
  return this.correctlyGuessed;
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

Game.prototype.takeAGuess = function(guess, answer) {
  var result = answer.includes(guess);
  if (result === true) {
    this.answerTally += 1;
  } else {
    this.guessesLeft -= 1;
    alreadyGuessed.push(guess + ", ");
  }
  return result;
};

Game.prototype.displayResult = function(letter, array, answer, board) {
  for (var i=0; i<answer.length; i++) {
    if (i === answer.indexOf(letter)) {
      this.correctlyGuessed.splice(i, 0, letter);
      this.correctlyGuessed.splice(i + 1, 1);
      console.log(this.correctlyGuessed);
      var displayThis = this.correctlyGuessed.join(' ');
    }
  }
    return displayThis;
};

Game.prototype.checkForEndGame = function(word) {
  if (this.guessesLeft === 0 || this.answerTally === word.length) {
    this.winLossStatus = true;
    return true;
  } else {
    return false;
  }
};


// frontend:
$(document).ready(function() {
  player.showLives();
  var game = new Game(10, false, [], 0);
  var answer = game.selectWord(wordArray);
  var board = game.populateBlanks(answer);
  var boardString = board.join('');
  var answerArray = game.generateArray(answer);
  console.log("ANSWER: " + answer);


  $("#letterSubmit").submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    var print = game.takeAGuess(letter, answer);
    if (print === true) {
      printThis = game.displayResult(letter, answerArray, answer, boardString);
      var printThisEdited = printThis.split('').join(' ');
      //$(".displayBoard").append(printThisEdited);
      $(".displayBoard").text(game.correctlyGuessed.join(' '));
    } else {
      $(".displayAlreadyGuessed").text(alreadyGuessed.join(' '));
      $(".displayLivesLeft").text(game.guessesLeft);
    }
    //check for win/loss:
    var final = game.checkForEndGame(answer);
    if (final === true && game.guessesLeft === 0) {
      alert("You lost the game! Lose a life and continue");
      player.loseLife();
      player.showLives();
    };
    if (final === true && game.answerTally === answer.length) {
      alert("You win!");
      $("#alfheimNextDiv").show();
    }
  });
});
