/*    Have the function MultiplicativePersistence(num) take the num parameter being
    passed which will always be a positive integer and return its multiplicative
    persistence which is the number of times you must multiply the digits in num
    until you reach a single digit. For example: if num is 39 then your program
    should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you
    stop at 4. */

function MultiplicativePersistence(num) { 
  var counter = 0;

  function digitReduce(x) { // recusrive function to multiply num's digits until a single digit is reached
    var temp,
        next;

    temp = x.toString().split("");  // convert number to string, split string to array

    if (temp.length === 1) {    // if array.length === 1, return counter
      return counter;
    } else {  // else: counter++, for loop to multiply/equals digits (converted to numbers), recursive call
      counter++;
      next = temp.reduce(function(sum, number) {
        return Number(sum) * Number(number);
      }, 1)

        digitReduce(next);
    }
  }

  digitReduce(num);

  return counter; 
}