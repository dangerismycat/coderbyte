/*	Have the function VowelCount(str) take the str string parameter being passed and
	return the number of vowels the string contains (ie. "All cows eat grass" would
	return 5). Do not count y as a vowel for this challenge. */

function VowelCount(str) { 
  var counter = 0,
      temp = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (temp.charAt(i) === "a" || temp.charAt(i) === "e" || temp.charAt(i) === "i" || temp.charAt(i) === "o" || temp.charAt(i) === "u") {
      counter++;
    }
  }
  
  return counter; 
}


// refactored

function VowelCount2(str) {
  var output,
      vowels = /[aeiou]/gi;

  output = str.match(vowels);

  return output.length;
}