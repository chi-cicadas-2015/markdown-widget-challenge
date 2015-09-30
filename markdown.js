// Model - stores original user input
var TextInput = function() {
	this.userInput = "";

	this.update = function(text) {
		this.userInput = text;
	}
}

// View - defines area to get text from and output processed data
var View = function(inputArea, outputArea) {
	this.setArea = function() {
		return $(inputArea);
	}

	this.showMarkdownText = function(typedText) {
		$(outputArea).html(typedText);
	}
}

// Controller - initializes Widget, listens for events, sends data to model and view
var MarkdownWidget = function(inputArea, outputArea) {
	this.inputArea = inputArea; 
	this.outputArea = outputArea;

	var textInput = new TextInput();
	var view = new View(inputArea, outputArea);

	function processData() {
		var rawString = $(this).val();
		textInput.update(rawString);  // sends to model
		view.showMarkdownText(textInput.userInput);
	}

	this.initialize = function() {
		view.setArea().on("keyup", processData);
	}
}