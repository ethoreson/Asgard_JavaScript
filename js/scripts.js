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

exports.playerModule = Player;
