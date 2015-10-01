/*	Have the function PowersofTwo(num) take the num parameter being passed which
	will be an integer and return the string true if it's a power of two. If it's
	not return the string false. For example if the input is 16 then your program
	should return the string true but if the input is 22 then the output should be
	the string false. */

function PowersofTwo(num) {  // recursive function to divide by 2 and return the answer
  if (num === 1) {  // if answer === 1, return true
    return true;
  } else if (num < 1) {  // if < 0, return false
    return false;
  } else { // if answer > 1, check if answer % 2 = 0
    if (num % 2 === 0) {   // if yes return function (answer / 2)
      return PowersofTwo(num / 2);
    } else {  // if no return false
      return false;
    }
  }         
}