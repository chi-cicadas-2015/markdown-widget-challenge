var MarkdownWidget = function(input){
  var inputVal = $(input).val();

  var outputText = inputVal.replace(/\*(.+)\*|\_(.+)\_/g, function(match, p1, p2){
    var replacementText = "";
    if (match.includes("*")){
      replacementText = "<b>" + p1 + "</b>";
    } else if (match.includes("_")){
      replacementText = "<i>" + p2 + "</i>";
    }
    return replacementText;
  });
  return outputText;
};


$(document).ready(function(){
  $("#md-input").on("keyup", function(event){
    if($(this).val().includes("*") || $(this).val().includes("_")){
      $("#md-output").html(MarkdownWidget("#md-input"));
    } else {
      $("#md-output").html("<p>"+ $(this).val() + "</p>");
    }
  });
});
