var replaceWord = function(string, inputWord, newWord) {
// we want to change a word in a string to a different word
// debugger;
var output = string.replace(inputWord, newWord);
// debugger;
return output;

};


$(document).ready(function() {
  $("form#replaceWord").submit(function(event) {
    var string = $("input#string").val();
    var inputWord = $("input#input-word").val();
    var newWord = $("input#new-word").val();
    var result = replaceWord(string, inputWord, newWord);

    $("#result").text(result);

    $("#result").show();

    event.preventDefault();

  });
});
