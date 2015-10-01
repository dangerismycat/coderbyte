/*  Have the function CaesarCipher(str,num) take the str parameter and perform
/*  a Caesar Cipher shift on it using the num parameter as the shifting number.
/*  A Caesar Cipher works by shifting each letter in the string N places down
/*  in the alphabet (in this case N will be num). Punctuation, spaces, and
/*  capitalization should remain intact. For example if the string is "Caesar
/*  Cipher" and num is 2 the output should be "Ecguct Ekrjgt". */


function CaesarCipher(str,num) { 
  var upperCheck = /[A-Z]/g,
      lowerCheck = /[a-z]/g,
      output = "",
      newChar = 0;
    
  for (var i = 0; i < str.length; i++) {
    if (upperCheck.test(str.charAt(i))) {
      newChar = str.charCodeAt(i) + num;
      if (newChar > 90) {
        newChar -= 26;
      }
        output += String.fromCharCode(newChar);
    } else if (lowerCheck.test(str.charAt(i))) {
      newChar = str.charCodeAt(i) + num;
      if (newChar > 122) {
        newChar -= 26;
      }
      output += String.fromCharCode(newChar);
    } else {
      output += str.charAt(i);
    }
  }
    
  return output;
}


// refactored for functional approach

function CaesarCipher2(str,num) { 
  var upperCheck = /[A-Z]/g,
      lowerCheck = /[a-z]/g,
      output = [],
      newChar = 0,
      temp = str.split("");

  temp.forEach(function(item) {
    if (item.match(upperCheck)) {
      newChar = item.charCodeAt() + num;

      if (newChar > 90) {
        newChar -= 26;
      }

      output.push(String.fromCharCode(newChar));
    } else if (item.match(lowerCheck)) {
      newChar = item.charCodeAt() + num;

      if (newChar > 122) {
        newChar -= 26;
      }

      output.push(String.fromCharCode(newChar));
    } else {
      output.push(item);
    }
  });
    
  return output.join("");
}