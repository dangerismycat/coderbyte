/*  Have the function FirstReverse(str) take the str parameter being passed and
  return the string in reversed order. */

function FirstReverse(str) {
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}


// refactored for functional approach

function FirstReverse2(str) {
  var reversed = [];

  str.split("").forEach(function(letter) {
    reversed.unshift(letter);
  });

  return reversed.join("");
}
