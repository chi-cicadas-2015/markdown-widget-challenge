$(function(){
  $("#original").on("keyup", function(keypress){
    var text = $(this).val();
    var new_text = transformText(text);
    $("#transformed").html(new_text);
    });
});
