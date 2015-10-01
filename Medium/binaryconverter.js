/* 	Have the function BinaryConverter(str) return the decimal form of the
/* 	binary value. For example: if 101 is passed return 5, or if 1000 is passed
/* 	return 8. */


function BinaryConverter(str) { 
  var output = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(str.length - 1 - i) === "1") {
      output += Math.pow(2, i);
    }
  }
    
  return output;
}