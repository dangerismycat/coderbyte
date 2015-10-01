/*  Have the function PrimeMover(num) return the numth prime number. The range
    will be from 1 to 10^4. For example: if num is 16 the output should be 53 as
    53 is the 16th prime number. */


function PrimeMover(num) {
  var primes = [2, 3, 5, 7, 11, 13];

  if (num < 1) {
    return "Error";
  }

  if (num > 6) {
    for (var i = 15; num >= primes.length; i += 2) {
      if (primes.every(function(p) {
        return i % p;
      })) {
        primes.push(i);
      }
    }
  }

  return primes[num - 1];    
}