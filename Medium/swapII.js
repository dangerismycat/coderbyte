/*  Have the function SwapII(str) take the str parameter and swap the case of
/*  each character. Then, if a letter is between two numbers (without
/*  separation), switch the places of the two numbers. For example: if str is
/*  "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. */

// Currently BROKEN. Case swap works, number shift does not. Probably something to do with regex testing.

function SwapII(str) { 
	var output = [];
      numbers = /[0-9]/g,
      upperLetters = /[A-Z]g/,
      lowerLetters = /[a-z]/g;
      temp = str.split(""),
      x;
  
  for (var i = 0; i < temp.length; i++) { // swap cases
    if (upperLetters.test(temp[i])) {
      output.push(temp[i].toLowerCase());
    } else if (lowerLetters.test(temp[i])) {
      output.push(temp[i].toUpperCase());
    } else {
      output.push(temp[i]);
    }
	}
    
  for (var i = 0; i < output.length; i++) { // for loop iterates through temp
    x = 0;

    if (numbers.test(output[i]) && (lowerLetters.test(output[i + 1]) || upperLetters.test(output[i + 1]))) { // if a number is found && next item is a letter
    	for (var j = i + 2; j < output.length; j++) { // for loop iterates through array from that number
    		if (numbers.test(output[j])) { // if another number is found, swap them and break
          x = output[j];
          output[j] = output[i];
          output[i] = x;
          break;
        }
        if (!(numbers.test(output[j])) && !(lowerLetters.test(output[j].toLowerCase()))) { // if a non-number, non-letter is found, break
          break;
        }
      }
    }
  }

	return output.join("");
}