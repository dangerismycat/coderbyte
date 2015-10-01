/*  Have the function PalindromeTwo(str) take the str parameter being passed
/*  and return the string true if the parameter is a palindrome, (the string is
/*  the same forward as it is backward) otherwise return the string false. The
/*  parameter entered may have punctuation and symbols but they should not
/*  affect whether the string is in fact a palindrome. For example: "Anne, I
/*  vote more cars race Rome-to-Vienna" should return true. */


function PalindromeTwo(str) {
  var letterCheck = /[a-z]/g,
      output = true,
      temp = str.toLowerCase(),
      newString = "";

  for (var i = 0; i < temp.length; i++) {
    if (letterCheck.test(temp[i])) {
      newString += temp[i];
    }
  }
  
  for (var i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] != newString[newString.length - 1 - i]) {
      output = false;
    }
  }

  return output;
}


// refactored for functional approach

function PalindromeTwo2(str) {
  var letterCheck = /[a-z]/g,
      temp = str.toLowerCase().split(""),
      newString = "",
      compareString;

  temp.forEach(function(item) {
    if (item.match(letterCheck)) {
      newString += item;
    }
  });

  compareString = newString.split("").reverse().join("");

  if (newString == compareString) {
    return true;
  } else {
    return false;
  }
}




