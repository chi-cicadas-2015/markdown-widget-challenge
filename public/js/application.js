$(document).ready(function() {
  $('#input').on('input', function() {
    var $text = $(this).val();
    var boldWord = $text.match(/__.+__/);
    var italicWord = $text.match(/_.+_/);
    $text = $text.replace(boldWord, '<strong>$&</strong>');
    $text = $text.replace(italicWord, '<em>$&</em>');

    $('#markdownified').html($text);
  });
});
