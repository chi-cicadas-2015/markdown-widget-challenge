$(document).ready(function() {
  $('#input').on('input', function() {
    var $text = $(this).val();
    var boldWord = $text.match(/__.+__/);
    console.log(boldWord);
    $text = $text.replace(boldWord, '<strong>$&</strong>');

    $('#markdownified').html($text);
  });
});
