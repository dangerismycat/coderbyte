/*    Have the function SwapCase(str) take the str parameter and swap the case of each
    character. For example: if str is "Hello World" the output should be hELLO
    wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) { 
  var output = "",
      uppercase = /[A-Z]/g;

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(uppercase) !== null) {  // if UPPERCASE already
      output += str.charAt(i).toLowerCase(); 
    } else {  // if lowercase already
      output += str.charAt(i).toUpperCase();
    }
  }

  return output; 
}

// refactored for functional approach

function SwapCase2(str) {
  var temp,
      uppercase = /[A-Z]/g,
      output = "";

  temp = str.split("");

  temp.forEach(function(letter) {
    if (letter.match(uppercase) !== null) {
      output += letter.toLowerCase();
    } else {
      output += letter.toUpperCase();
    }
  });

  return output;
}