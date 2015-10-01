/*    Have the function SimpleSymbols(str) take the str parameter being passed and
    determine if it is an acceptable sequence by either returning the string true or
    false. The str parameter will be composed of + and = symbols with several
    letters between them (ie. ++d+===+c++==a) and for the string to be true each
    letter must be surrounded by a + symbol. So the string to the left would be
    false. The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) { 
  var output = true,
      temp = str.toLowerCase(),
      letters = /[a-z]/gi;

  for (var i = 0, len = temp.length; i < len; i++) {
    if (letters.test(temp.charAt(i))) {
      if (temp.charAt(i - 1) !== "+" || temp.charAt(i + 1) !== "+") {
        output = false;
        break;
      }
    }
  }
  return output;
}

// refactored for functional approach

function SimpleSymbols2(str){
  var output = true;
      temp = str.toLowerCase().split("");
      letters = /[a-z]/gi;

  temp.forEach(function(letter, index) {
    if (letter.match(letters) != null) {
      if (temp[index - 1] !== "+" || temp[index + 1] !== "+") {
        output = false;
        return;
      }
    }
  });

  return output;
}