/*	Have the function ExOh(str) take the str parameter being passed and return the
	string true if there is an equal number of x's and o's, otherwise return the
	string false. Only these two letters will be entered in the string, no
	punctuation or numbers. For example: if str is "xooxxxxooxo" then the output
	should return false because there are 6 x's and 5 o's. */

function ExOh(str) { 
    var xCounter = 0;
      var oCounter = 0;
      var temp = str.toLowerCase();
      for (var i = 0; i < temp.length; i++) {
          if (temp.charAt(i) === "x") { xCounter++; }
          else if (temp.charAt(i) === "o") { oCounter++; }
    }
      return xCounter === oCounter;
}

// refactored for functional approach

function ExOh2(str) {
  var xCounter = 0,
      oCounter = 0,
      temp = str.toLowerCase().split("");

  temp.forEach(function(letter) {
    if (letter === "x") {
      xCounter++;
    } else if (letter === "o") {
      oCounter++;
    }
  });

  return xCounter === oCounter;
}