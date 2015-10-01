/*  Have the function AdditivePersistence(num) take the num parameter being passed
    which will always be a positive integer and return its additive persistence
    which is the number of times you must add the digits in num until you reach a
    single digit. For example: if num is 2718 then your program should return 2
    because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/

function AdditivePersistence(num) { 
  var counter = 0;

  // recursive function to add a number's digits until a single digit is reached
  function reduceDigits(x) {
    var temp,
        next;

    temp = x.toString().split("");  // convert number to string, split string to array

    if (temp.length === 1) {  // if array.length === 1, return counter
      return counter;
    } else { // else use for loop to add array elements, counter++, recursive call
      counter++;
      next = temp.reduce(function(sum, number) {
        return Number(sum) + Number(number);
      });

      reduceDigits(next);
    }
  }

  reduceDigits(num);

  return counter;       
}