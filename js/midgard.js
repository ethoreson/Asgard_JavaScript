//backend:
function Game(guessesLeft, winLossStatus) {
  this.guessesLeft = guessesLeft;
  this.winLossStatus = winLossStatus;
}

var wordArray = ["elves", "dwarf", "giant", "hammer", "wedding", "mythology"];

Game.prototype.selectWord = function(wordArray) {
  var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  return word;
}; // done

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


// frontend:
$(document).ready(function() {
  var game = new Game(10, true);
  var answer = game.selectWord(wordArray);
  $("#letterSubmit").submit(function(event) {
    event.preventDefault();
    var letter = $("#letter").val();
    console.log(letter);
    var print = game.takeAGuess(letter, answer);
    console.log(print);
  })
  console.log("ANSWER: " + answer)


})
