function MarkdownWidget() {
  this.italicsRegex = /\*(\w+)\*{1}/gi;
  this.altItalicsRegex = /\_(\w+)\_/gi;
  this.boldRegex = /\*\*(\w+)\*\*/gi;
};

MarkdownWidget.prototype.italics = function(input) {
  var text = input;
  var test = text.replace(this.italicsRegex, "<i> $1 </i>" );
  console.log(test);
  return test;
};

MarkdownWidget.prototype.bold = function(input) {
  var text = input;
  var test = text.replace(this.boldRegex, "<b>$1</b>" );
  console.log(test);
  return test;
};

MarkdownWidget.prototype.altItalics = function(input) {
  var text = input;
  var test = text.replace(this.altItalicsRegex, "<i> $1 </i>" );
  console.log(test);
  return test;
};

MarkdownWidget.prototype.convertAll = function(input) {
  output = this.bold(input);
  output = this.altItalics(output);
  output = this.italics(output);
  return output;
}

