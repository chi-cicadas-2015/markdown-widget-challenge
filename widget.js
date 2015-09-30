// REFACTOR ----------------------------
// View
var WidgetView = function() {
  this.getInputArea = function() {
    return $("#input-area");
  }

  this.getDisplayArea =  function() {
    return $("#display-text")
  }

  this.setDisplayArea = function(output,source) {
    output.text(
      markdown.toHTML( source.val(),'Maruku')
    )
  }
}

// Controller
var Widget = function() {
  var widgetView = new WidgetView();

  function processText() {
    var source = widgetView.getInputArea();
    var output = widgetView.getDisplayArea()

    widgetView.setDisplayArea(output,source)
  }

  this.initialize = function(){
    widgetView.getInputArea().on("keyup",processText);
  }
}
// FIRST DRAFT-------------------------
// View
// var WidgetView = function() {
//   this.getInputArea = function() {
//     return $("#input-area");
//   }

//   this.displayText = function(convertedNewText,oldText) {
//     // console.log(convertedNewText);
//     // console.log(oldText);
//     $("#display-area").html("<p id='display-text'>" + convertedNewText + oldText + "</p>")
//   }

//   this.grabExistingText =  function() {
//     existingText = $("#display-text").html()
//     if (existingText) {
//       return $("#display-text").html()
//     } else {
//       return ""
//     }
//   }
// }

// // Controller
// var Widget = function() {
//   var widgetView = new WidgetView();

//   function compileText(event) {
//     console.log(event.keyCode)

//     var oldText = widgetView.grabExistingText();
//     var convertedNewText = processText(event.keyCode);
//     widgetView.displayText(convertedNewText,oldText)
//   }

//   function processText(keyCode) {
//     return String.fromCharCode(keyCode)
//   }

//   this.initialize = function(){
//     // widgetView.getInputArea().on("keyup", compileText);
//     widgetView.getInputArea().on("keypress", compileText);
//   }
// }