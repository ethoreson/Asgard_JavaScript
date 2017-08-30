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
  return wordArray;
}

Game.prototype.populateBlanks = function(word) {
  for (var i=0; i<word.length; i++) {
    this.correctlyGuessed.push("_");
  }
  return this.correctlyGuessed;
}

Game.prototype.replaceAt = function(index, replacement, string) {
  return string.substr(0, index) + replacement + string.substr(index + replacement.length);
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

Game.prototype.displayResult = function(letter, array, answer, board) {
  var changeBlankHere = [];
  console.log("answer: " + answer)
  console.log("array of word: " + array);
  console.log("should be length of word: " + array.length);
  debugger; //
  for (var i=0; i<answer.length; i++) { // for 5 times do:
    console.log(i);
    console.log(answer.indexOf(letter));
    if (i === answer.indexOf(letter)) { // if 'w' is w
      var newDisplay = this.replaceAt(i, letter, board);
      console.log(newDisplay);
    }
  }
};

Game.prototype.checkForEndGame = function(word) {
  if (this.guessesLeft === 0) {
    this.winLossStatus = true;
    return true;
  // } else if (correctlyGuessed.length === word.length) { //winning logic goes here!!!!!!!
  //   this.winLossStatus = true;
  //   return true;
  } else {
    return false;
  }
};


// frontend:
$(document).ready(function() {
  var game = new Game(10, false, []);
  var answer = game.selectWord(wordArray);
  var board = game.populateBlanks(answer);
  $(".displayBoard").append(board);

  console.log("ANSWER: " + answer);
  var answerArray = game.generateArray(answer);
  $("#letterSubmit").submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    var print = game.takeAGuess(letter, answer);
    console.log("answer array: " + answerArray);
    if (print === true) {
      game.displayResult(letter, answerArray, answer, board); // this is broken
    } else {
      $(".displayLivesLeft").append("Guesses Left: " + game.guessesLeft);
    }
    //check for win/loss:
    var final = game.checkForEndGame(answer);
    if (final === true && game.guessesLeft === 0) {
      alert("You lost the game! Lose a life and continue");
      $("#alfheimNextDiv").show();
    } else if (final === true) {
      alert("You win!");
      $("#alfheimNextDiv").show();
    };
  });


});
