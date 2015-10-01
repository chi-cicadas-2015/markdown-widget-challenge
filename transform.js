function transformText(text) {
  replacement_text = text
  replacement_text = boldText(replacement_text)
  replacement_text = italicizeText(replacement_text)
  return underlineText(replacement_text)
}

function italicizeText(text) {
  new_text= text.replace( /(^|[^*])\*([^*]+|\w)\*/g, '$1<em>$2</em>' )
  return new_text
}

function underlineText(text) {
  return text.replace(/\_([^*_]+|\w)\_/g, '<u>$1</u>')
}

function boldText(text) {
  return text.replace(/\*\*([^*]+|\w)\*\*/g, '<b>$1</b>')
}

// *_**matt**_*
