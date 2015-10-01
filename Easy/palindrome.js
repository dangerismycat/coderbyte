/*	Have the function Palindrome(str) take the str parameter being passed and return
	the string true if the parameter is a palindrome, (the string is the same
	forward as it is backward) otherwise return the string false. For example:
	"racecar" is also "racecar" backwards. Punctuation and numbers will not be part
	of the string. */


function Palindrome(str) { 
  var temp = str.toLowerCase().replace(/ /g, "");

  for (var i = 0; i < Math.floor(temp.length / 2); i++) {
    if (temp.charAt(i) !== temp.charAt(temp.length - 1 - i)) {
      return false;
    }
  }

  return true;
}


// refactored

function Palindrome(str) {
  var temp = str.toLowerCase().replace(/ /g, ""),
      reversed = temp.split("").reverse().join("");

  return temp === revesed;
}