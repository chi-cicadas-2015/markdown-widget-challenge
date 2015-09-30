$(document).ready(function() {
  widget = new MarkdownWidget();

$("#source-id").keyup(function() {
  var textValue = $(this).val();
  var convertedText = widget.convertAll(textValue);
  $("#preview-div").html(convertedText);
  });

});
