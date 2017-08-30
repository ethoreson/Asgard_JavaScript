//backend:
function Game(guessesLeft, winLossStatus, correctlyGuessed) {
  this.guessesLeft = guessesLeft;
  this.winLossStatus = winLossStatus;
  this.correctlyGuessed = correctlyGuessed;
}

var wordArray = ["elves", "dwarf", "giant", "hammer", "wedding", "mythology"];

Game.prototype.selectWord = function(wordArray) {
  var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  return word;
};

Game.prototype.generateArray = function(word) {
  var wordArray = word.split('');
}

Game.prototype.populateBlanks = function(word) {
  for (var i=0; i<word.length; i++) {
    this.correctlyGuessed.push("_");
    return this.correctlyGuessed;
  }
}

Game.prototype.takeAGuess = function(guess, answer) {
  var result = answer.includes(guess);
  if (result === true) {
    console.log("contains " + guess);
  } else {
    console.log("does not contain " + guess);
    this.guessesLeft -= 1;
  }
  return result;
};

Game.prototype.displayResult = function(letter) {
  var changeBlankHere = [];
  for (var i=0; i<this.answerArray.length; i++) {
    if (letter = this.answerArray.indexAt(i)) {
      changeBlankHere.push(i);
      console.log(changeBlankHere); //should be 0, or 0, 3 if elves
      this.correctlyGuessed.replace(letter, i);
      console.log(correctlyGuessed);
    }
  }
};

Game.prototype.checkForEndGame = function() {
  if (this.guessesLeft === 0) {
    this.winLossStatus = true;
    return true;
  } else if (){ //winning logic goes here!!!!!!!
    this.winLossStatus = true;
    return true;
  } else {
    return false;
  }
};


// frontend:
$(document).ready(function() {
  var game = new Game(10, false, []);
  var answer = game.selectWord(wordArray);
  var board = game.populateBlanks(answer);
  console.log(game);
  console.log("ANSWER: " + answer);
  $("#letterSubmit").submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    var print = game.takeAGuess(letter, answer);
    var final = game.checkForEndGame();
    if (final = true && game.guessesLeft === 0) {
      alert("You lost the game! Lose a life and continue");
      $("#alfheimNextDiv").show();
    } else if (final = true) {
      alert("You win!");
      $("#alfheimNextDiv").show();
    };
    if (print === true) {

      //find each instance of that letter in wordArray
      //get thier indexes
      //
    } else {
      $(".displayLivesLeft").append("Guesses Left: " + game.guessesLeft);
    }
  })
  console.log("ANSWER: " + answer)


})
