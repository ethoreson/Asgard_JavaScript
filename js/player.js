//business logic

function Player(god, lives) {
  this.god = god;
  this.lives = lives;
}

Player.prototype.showLives = function() {
  if (this.lives == 4) {
    $(".fourlives").show();
  } else {
    $(".threelives").show();
  }
}

//user interface

$(document).ready(function() {
  $("#godSubmit").click(function(event) {
    var godName = $("input:radio[name=god]:checked").val();
    event.preventDefault();
    var player = new Player(godName, 3);
    if (godName == "frigg") {
      player.lives += 1;
    }
    $("#beginNext").show();
  });
});
