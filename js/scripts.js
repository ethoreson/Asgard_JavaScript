function Player(god, lives, levelsCompleted) {
  this.god = god;
  this.lives = lives;
  this.levelsCompleted = [];
}

Player.prototype.addLife = function() {
  return this.lives += 1;
}

Player.prototype.loseLife = function() {
  return this.lives -= 1;
}

Player.prototype.showLives = function() {
  if (player.lives === 4) {
    $(".fourlives").show();
  } else if (player.lives === 3) {
    $(".threelives").show();
    $(".fourlives").hide();
  } else if (player.lives === 2) {
    $(".twolives").show();
    $(".threelives").hide();
  } else {
    $(".oneLife").show();
    $(".twolives").hide();
  }
}

var player = new Player("godName", 3, 0);



//exports.playerModule = Player;
