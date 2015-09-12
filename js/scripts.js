var replaceWord = function(string, inputWord, newWord) {
  var inputWordRegX = new RegExp(inputWord, 'g');
  var output = string.replace(inputWordRegX, newWord);
  return output;
};

$(document).ready(function() {
  $("form#replaceWord").submit(function(event) {
    var string = $("input#string").val();
    var inputWord = $("input#input-word").val();
    var newWord = $("input#new-word").val();
    var result = replaceWord(string, inputWord, newWord);

    $("#result").append('<li>' + result + '</li>');

    event.preventDefault();

  });
});
