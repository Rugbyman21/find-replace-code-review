            // replaceWord('coffee coffee', 'coffee', 'water');
var replaceWord = function(string, inputWord, newWord) {
  // we want to change a word in a string to a different word

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

    // $("#result").show();

    event.preventDefault();

  });
});
