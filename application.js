$( document ).ready(function() {
    MarkdownWidget("#textarea1", "#textarea2");
});

function MarkdownWidget (arg1, arg2){

  $(arg1).on('keyup', function(event){

    var result = markdown_mvp($(this));

    $(arg2).html(result);

  });
};

function markdown_mvp (arg) {

  var result = arg.val().replace(/\*\*(\w+)\*\*/, "<strong> $1 </strong>");

  var result = result.replace(/\_(\w+)\_/, "<u> $1 </u>");

  var result = result.replace(/\*(\w+)\*/, "<i> $1 </i>");

  return result;
}

// Markdown implementation
// function MarkdownWidget (arg1, arg2){
//   $(arg1).on('keyup', function(){
//
//     var display = $(this).val();
//
//     html_content = markdown.toHTML( display, "Maruku" );
//
//     $(arg2).val(html_content);
//   })
// };


// Drafts

// This works, but dirty.
// var $c = $(this).val().replace(/\*\*(\w+)\*\*/, "<strong> $1 </strong>").replace(/\_(\w+)\_/, "<u> $1 </u>").replace(/\*(\w+)\*/, "<i> $1 </i>")

// This is less bad
// var $c = $(this).val().replace(/\*\*(\w+)\*\*/, "<strong> $1 </strong>");
// var $c = $c.replace(/\_(\w+)\_/, "<u> $1 </u>");
// var $c = $c.replace(/\*(\w+)\*/, "<i> $1 </i>");
