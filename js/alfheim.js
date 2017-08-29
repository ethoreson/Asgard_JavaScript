$(document).ready(function() {
  $("#findGold").submit(function(event) {
    event.preventDefault();
    var color = $("input:radio[name=color]:checked").val();
    if (color === "gold") {
      alert("correct!");
      $("#svartalfheimNextDiv").show();
    } else {
      alert("Sorry! Guess again");
      player.loseLife();
    }
  })
})
