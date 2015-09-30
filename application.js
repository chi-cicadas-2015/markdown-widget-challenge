$( document ).ready(function() {
    MarkdownWidget("#textarea1", "#textarea2");
});

function MarkdownWidget(arg1, arg2){
  $(arg1).on('keyup', function(event){
    $(arg2).val($(arg1).val());
  });
};

//  I don't know how to implement the italic/bold
// Maybe a conditional of some sort?, My textbox
// doesn't do styling... I'm not sure how to solve
// this. Will come back to it later.
