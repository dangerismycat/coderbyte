/*    Have the function ArrayAdditionI(arr) take the array of numbers stored in arr
    and return the string true if any combination of numbers in the array can be
    added up to equal the largest number in the array, otherwise return the string
    false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should
    return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not
    contain all the same elements, and may contain negative numbers. */

function ArrayAdditionI(arr) { 
  var temp,
      largest;

  temp = arr.sort(function(a, b) {  // sort to numeric order
    return a - b;
    });
  largest = temp.pop();  // remove largest element and store for comparison

    function findAnswer() {
      function eachElement(sum, i) {
        if (sum === largest) {  // answer is found
          return true;
        } else if (sum > largest || i === temp.length) {  // answer is overshot or out of tries
          return null;
        } else {
          return eachElement(sum + temp[i], i + 1) || eachElement(sum, i + 1) }  // recursive searching
        }
        return eachElement(0, 0); // start at the very beginning (a very good place to start)
    }

  return findAnswer() || false;     
}