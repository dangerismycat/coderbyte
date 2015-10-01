/*    Have the function NumberSearch(str) take the str parameter, search for all the
    numbers in the string, add them together, then return that final number. For
    example: if str is "88Hello 3World!" the output should be 91. You will have to
    differentiate between single digit numbers and multiple digit numbers like in
    the example above. So "55Hello" and "5Hello 5" should return two different
    answers. Each string will contain at least one letter or symbol. */

function NumberAddition(str) { 
  var numArray = [],
      counter = 0,
      numbers = /[0-9]/g;

  function findNumbers(str, i) {
    if (str.charAt(i).match(numbers)) {
      counter++;
      findNumbers(str, i + 1);
    } else if (i > str.length) {
      return null;
    } else {
      numArray.push(Number(str.slice(i - counter, i)));
      counter = 0;
      findNumbers(str, i + 1);
    }
  }

  findNumbers(str, 0);

  return numArray.reduce(function(sum, number) {
    return sum + number;
  });
}