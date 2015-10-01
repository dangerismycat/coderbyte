/* 	Have the function ABCheck(str) take the str parameter being passed and return
	the string true if the characters a and b are separated by exactly 3 places
	anywhere in the string at least once (ie. "lane borrowed" would result in
	true because there is exactly three characters between a and b). Otherwise
	return the string false. */

function ABCheck(str) { 
  var output = false,
      temp = str.toLowerCase();

  for (var i = 0; i < temp.length; i++) {
    if ((temp.charAt(i) === "a" && temp.charAt(i + 4) === "b") || (temp.charAt(i) === "b" && temp.charAt(i + 4) === "a")) {
      output = true;
    }
  }

  return output;    
}