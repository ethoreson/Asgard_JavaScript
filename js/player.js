function Player(name, lives) {
  this.name = name;
  this.lives = 3;
}

var icons = require('glyphicons');

Player.prototype.showLives = function() {
  if (this.lives == 4) {
    $(".fourlives").show();
  } else {
    $(".threelives").show();
  }
}

Player.prototype.subtractLife = function() {
  this.lives -= 1;
}

Player.prototype.addLife = function() {
  this.lives += 1;
}
