
$(document).ready(function() {
  var resultLabel = $('#quiz-result');

  $("#form1").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    // var name = $("#address").val();
    var password = $("input:checkbox[name=password]:checked").val();

    console.log({
      'password': password,
    });

    var resultText = '';
    if (password === 'visible' && 'tolkien' && 'underground' && 'frozen' && 'giants') {
      resultText = "You got it!"
      alert("Correct!");
      debugger;
      $("#output").show();
    } else {
      resultText = "Nope! Lose a life."
      $("#output").show();
    }
    $('#quiz-result').text(resultText);
  })
});
