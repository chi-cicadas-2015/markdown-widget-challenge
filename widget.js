// Markdown Library REFACTOR ----------------------------
// View
// var WidgetView = function() {
//   this.getInputArea = function() {
//     return $("#input-area");
//   }

//   this.getDisplayArea =  function() {
//     return $("#display-text")
//   }

//   this.setDisplayArea = function(output,source) {
//     output.text(
//       markdown.toHTML( source.val(),'Maruku')
//     )
//   }
// }

// // Controller
// var Widget = function() {
//   var widgetView = new WidgetView();

//   function processText() {
//     var source = widgetView.getInputArea();
//     var output = widgetView.getDisplayArea()

//     widgetView.setDisplayArea(output,source)
//   }

//   this.initialize = function(){
//     widgetView.getInputArea().on("keyup",processText);
//   }
// }

// Manual Markdown ----------------------------
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
      source.val()
    )
  }
}

// Controller
var Widget = function() {
  var widgetView = new WidgetView();

  function processText() {
    var source = widgetView.getInputArea();
    var output = widgetView.getDisplayArea();

    if (checkItalics(source.val()) != "") {
      // new_source = checkItalics(source.val()).italics();
      // console.log(new_source);
      widgetView.setDisplayArea(output,source)
    } else {
      widgetView.setDisplayArea(output,source)
    }
  }

  function checkItalics(sourceVal) {
    italicsRegEx = /\*[a-zA-Z]+\*/

    if (italicsRegEx.test(sourceVal)) {
      indices = [];
      for(var i=0; i<sourceVal.length;i++) {
        if(sourceVal[i] === "*") indices.push(i)
      }
      new_string = sourceVal.substring(0,indices[0]) + sourceVal.substring(indices[0]+1,indices[1]).italics() + sourceVal.substring(indices[1],sourceVal.length-1)
      console.log(new_string)
      // return new_string
      // console.log(indices[0]);
      // console.log(indices[1]);
      // console.log(sourceVal);
      // italicsCharacters.push(sourceVal.indexOf("*"));
      // console.log(indices);
      // var last = sourceVal.length-1
      // console.log(sourceVal.substring(indices[0]+1,indices[1]));
    } else {
      return ""
    }
  }

  this.initialize = function(){
    // checkItalics()
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