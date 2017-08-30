//var player = require('./../js/scripts.js').playerModule;
//index js, frontend:
$(document).ready(function() {
  $("#godSubmit").submit(function(event) {
    event.preventDefault();
    var godName = $("input:radio[name=god]:checked").val();
    var player = new Player(godName, 3, 0);
    if (player.god === "frigg") {
      player.addLife();
      $(".fourlives").show();
    } else if (player.god === "sif") {
      player.levelsCompleted.push("Alfheim");
      $(".threelives").show();
    } else {
      player.levelsCompleted.push("Vanaheim");
      $(".threelives").show();
    }
    $(".pickAGod").hide();
    $("#beginNext").show();
  });

})
