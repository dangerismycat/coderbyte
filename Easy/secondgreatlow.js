/*    Have the function SecondGreatLow(arr) take the array of numbers stored in arr
    and return the second lowest and second greatest numbers, respectively,
    separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
    output should be 12 98. The array will not be empty and will contain at least 2
    numbers. It can get tricky if there's just two numbers! */

// Currently broken. Returns [undefined undefined] when given [80,80]

function SecondGreatLow(arr) { 
  var low = 0,
      high = 0;  

  arr = arr.sort(function (a, b) {  // sort the array
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {  // find the second lowest
    if (arr[i] === arr[arr.length - 1]) {
      low = arr[i];
      break;
    }
    if (arr[i] !== arr[i + 1]) {
      low = arr[i + 1];
      break;
    }
  }

  for (var i = arr.length - 1; i >= 0; i--) {  // find the second highest
    if (arr[i] === arr[0]) {
      high = arr[i];
      break;
    }
    if (arr[i] !== arr[i - 1]) {
      high = arr[i - 1];
      break;
    }
  }

  return low + " " + high;         
}