$(document).ready(function() {
  player.showLives();
  $("#findGold").submit(function(event) {
    event.preventDefault();
    var color = $("input:radio[name=color]:checked").val();
    if (color === "gold") {
      $("#svartalfheimNextDiv").show();
    } else {
      alert("Sorry! Guess again");
      player.loseLife();
      player.showLives();
    }
  })
})
