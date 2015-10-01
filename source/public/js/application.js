$(document).ready(function() {
  $("#inputbox").keyup(function(){
    var text = $(this).val();
    var transform = new Transform(text);
    var newText = transform.changeText(text);
    $("#previewbox").html(newText);
  });
});



