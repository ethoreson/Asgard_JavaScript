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

Game.prototype.displayResult = function(letter, array) {
  var changeBlankHere = [];
  console.log("array of word: " + array);
  console.log("should be length of word: " + array.length); //
  for (var i=0; i<array.length; i++) {
    console.log(array.indexOf(i)); // 'spell out word';
    if (letter = array.indexOf(i)) { // if 'x' is this letter
      changeBlankHere.push(i); //push index into array
      console.log("should be 0: " + changeBlankHere); //should be 0, or 0, 3 if elves
      this.correctlyGuessed.replace(letter, i);
      console.log(correctlyGuessed);
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
  var board = game.populateBlanks(answer); //board = _____
  console.log("ANSWER: " + answer);
  var answerArray = game.generateArray(answer);
  $("#letterSubmit").submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    var print = game.takeAGuess(letter, answer);
    if (print = true) {
      game.displayResult(letter, answerArray);
    }

    var final = game.checkForEndGame(answer);
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


})
