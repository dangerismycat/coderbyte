/*    Have the function LetterChanges(str) take the str parameter being passed and
    modify it using the following algorithm. Replace every letter in the string with
    the letter following it in the alphabet (ie. c becomes d, z becomes a). Then
    capitalize every vowel in this new string (a, e, i, o, u) and finally return
    this modified string. */

function LetterChanges(str) { 
    var output = "";
      var temp = str.toLowerCase();
      for (var i = 0; i < str.length; i++) {  // letter shifter
          if (temp.charCodeAt(i) >= 97 && temp.charCodeAt(i) < 122) {
            output += String.fromCharCode(temp.charCodeAt(i) + 1);
        }
          else if (temp.charCodeAt(i) === 122) {
              output += "A";
        }
          else output += str.charAt(i);
    }
    output = output.replace(/a/g,"A");  //  vowel capitalizer
    output = output.replace(/e/g,"E");
    output = output.replace(/i/g,"I");
    output = output.replace(/o/g,"O");
    output = output.replace(/u/g,"U");

  return output;    
}

// refactored for functional approach
// currently BROKEN – letter shift/capitalize doesn't work. why?

function LetterChanges2(str) {
  var tempArray = [],
      lowercase = /[a-y]/,
      vowels = /aeiou/;

  // convert to array
  tempArray = str.toLowerCase().split("");

  // shift letters
  tempArray.forEach(function(letter) {
    if (letter.match(lowercase) != null) {
      return letter = String.fromCharCode(letter.charCodeAt() + 1);
    }
    else if (letter === "z") {
      return letter = "A";
    } else {
      return letter;
    }
  });

  // capitalize vowels
  tempArray.forEach(function(letter) {
    if (letter.match(vowels) != null) {
      return letter = letter.toUpperCase();
    } else {
      return letter;
    }
  });

  return tempArray.join("");
}