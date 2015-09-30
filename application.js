$(document).ready(function() {
  $("#widget-text").on("keyup", function(){
    var widgetText = $("#widget-text").val();
      $("#widget-div p").text(widgetText);
    if(widgetText.match(/\*(.+)\*/)) {
      $("#widget-div p").text(widgetText.match(/\*(.+)\*/)[1])
          $("#widget-div p").text(widgetText);
    }
    // for(var i = 0; i < widgetText.length; i++) {
    //   if(widgetText[i] == "*") {
    //     widgetText.replace(widgetText[i])
    //   }
    // }



  })


})

// function markdownWidget(sourceId, previewDiv) {
//   sourceId = document.getElementById(sourceId);
//   console.log("markdownWidget");
//   document.getElementById(previewDiv).innerHTML = sourceId;
// }

// var WidgetForm = function() {
//   this.getWidget = function() {
//     return $(document);
//   }

// }

// var Widget = function() {
//   var widgetForm = new WidgetForm();
//   console.log("Widget");
//   function getMarkdownWidget(event) {
//     if (event.keyCode == 13) {
//       console.log("getMarkdownWidget");
//       markdownWidget("widget-text", "widget-div");
//     };
//   }

//   this.initialize = function() {
//     widgetForm.getWidget().on("keyup", getMarkdownWidget());
//   }
// }
