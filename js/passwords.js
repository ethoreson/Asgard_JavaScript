
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

    } else {
      resultText = "Nope! Try again."
    }

    $('#inputs').css('display', 'none');
    $('#output').css('display', 'block');
    $('#quiz-result').text(resultText);
  })
});
