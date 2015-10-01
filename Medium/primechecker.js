/*  Have the function PrimeChecker(num) take num and return 1 if any
/*  arrangement of num comes out to be a prime number, otherwise return 0. For
/*  example: if num is 910, the output should be 1 because 910 can be arranged
/*  into 109 or 019, both of which are primes. */


function PrimeChecker(num) { 
  var options = [],
      numArray = num.toString().split(""),
      primes = [2, 3, 5, 7, 11, 13];

  function perm(arr) { // recursive function to generate permutations
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

  for (var i = 0; i < options.length; i++) {  // join permutations into "numbers" (strings)
    options[i] = options[i].join(""); 
  }

  options.sort(function(a, b) {  // sort to numeric order
    return a - b;
  });

  for (var i = 15; i <= options[options.length - 1]; i += 2) { // generate primes to highest permutation in options
    if (primes.every(function(p) {
      return i % p;
    })) {
      primes.push(i);
    }
  }

  for (var i = 0; i < options.length; i++) { // look for matches between options and primes arrays
    for (var j = 0; j < primes.length; j++) {
      if (options[i] == primes[j]) {
        return 1;
      }
    }
  }
  
  return 0;
}