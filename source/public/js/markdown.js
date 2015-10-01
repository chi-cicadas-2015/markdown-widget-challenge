function Transform(text){
  this.text = text;
}

Transform.prototype.italicize = function(text){
  return text.replace(/\*([^*]+|\w)\*/g, '<i>$1</i>');
};

Transform.prototype.bold = function(text){
  return text.replace(/\*\*([^*]+|\w)\*\*/g, '<b>$1</b>');
};

Transform.prototype.underline = function(text){
  return text.replace(/\_([^_]+|\w)\_/g, '<u>$1</u>');
};

Transform.prototype.changeText = function(text){
  var transformedText = text;
  var transformedText = this.bold(transformedText);
  var transformedText = this.italicize(transformedText);
  return this.underline(transformedText);
};

