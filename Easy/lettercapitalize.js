/*	Have the function LetterCapitalize(str) take the str parameter being passed and
	capitalize the first letter of each word. Words will be separated by only one
	space. */

function LetterCapitalize(str) { 
  var array = str.split(" "),
      output = "";

  for (var i = 0; array[i]; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    output = output + " " + array[i];
  }

  return output;    
}