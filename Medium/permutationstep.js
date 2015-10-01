/*  Have the function PermutationStep(num) take the num parameter being passed
/*  and return the next number greater than num using the same digits. For
/*  example: if num is 123 return 132, if it's 12453 return 12534. If a number
/*  has no greater permutations, return -1 (ie. 999). */


function PermutationStep(num) {
  var options = [],
      numArray = num.toString().split("");

  function perm(arr) {
    var outputArray = [];

    function iterate(tempArray, n) {
      var temp;

      for (var i = 0; i < n; i++) {
        temp = tempArray.slice();
        temp.splice(n - 1 - i, 0, temp.splice(n - 1, 1)[0]);
        if (n >= arr.length) {
          outputArray.push(temp);
        } else {
          iterate(temp, n + 1); 
        }
      }
    }

    iterate(arr, 1);

    return outputArray;
  }

  options = perm(numArray);

  for (var i = 0; i < options.length; i++) {
      options[i] = options[i].join(""); 
  }

  options.sort(function(a, b) {
    return a - b
  });

  if (options[options.length - 1] == num) {
      return -1;
  }

  for (var i = 0; i < options.length; i++) {
    if (options[i] > num) {
      return Number(options[i]);
    }
  }
}