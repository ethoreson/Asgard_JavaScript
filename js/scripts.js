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

// Frontend
$(document).ready(function() {
  $("#godSubmit").submit(function(event) {
    event.preventDefault();
    var godName = $("input:radio[name=god]:checked").val();
    var player = new Player(godName, 3, 0);
    if (player.god === "frigg") {
      player.addLife();
    } else if (player.god === "sif") {
      player.levelsCompleted.push("Alfheim");
    } else {
      player.levelsCompleted.push("Vanaheim");
    }
    console.log(player);
  });

})
