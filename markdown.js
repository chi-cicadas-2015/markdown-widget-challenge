// Model - stores original user input, converts to markdown
var TextInput = function() {
  this.userInput = "";
  var that = this;

  this.update = function(typedText) {
    this.userInput = typedText;
  }

  this.convertToMarkdown = function() {
    var string = that.userInput;
    var markedDown = "";
    var numberOfItalics = 0;
    var numberOfBolds = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "*" && string[i-1] == "*") {
        numberOfBolds++;
        if (numberOfBolds % 2) {
          numberOfItalics--;
          markedDown = markedDown.slice(0, markedDown.length-4);
          markedDown += "<strong>";
        } else {
          numberOfItalics--;
          markedDown = markedDown.slice(0, markedDown.length-4);
          markedDown += "</strong>";
        }
      } else if (string[i] == "*" || string[i] == "_") {
        numberOfItalics++;
        if (numberOfItalics % 2) {
          markedDown += "<em>";
        } else {
          markedDown += "</em>"
        }
      } else {
        markedDown += string[i];
      }
    }
    return markedDown;
  }
}

// View - defines area to get text from and output processed data
var View = function(inputArea, outputArea) {
  this.setInputArea = function() {
    return $(inputArea);
  }

  this.showMarkdownText = function(convertedText) {
    $(outputArea).html(convertedText);
  }
}

// Controller - initializes Widget, listens for events, sends data to model and view
var MarkdownWidget = function(inputArea, outputArea) {
  // this.inputArea = inputArea; 
  // this.outputArea = outputArea;
  var textInput = new TextInput();
  var view = new View(inputArea, outputArea);

  this.initialize = function() {
    view.setInputArea().on("keyup", processData);
  }

  function processData() {
    var rawString = $(this).val();
    textInput.update(rawString);  // sends to model
    view.showMarkdownText(textInput.convertToMarkdown);
  }

}