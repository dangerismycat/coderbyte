/*  Have the function PrimeTime(num) take the num parameter being passed and
/*  return the string true if the parameter is a prime number, otherwise return
/*  the string false. The range will be between 1 and 2^16. */


function PrimeTime(num) { 
  var primes = [2];

  for (var i = 3; i <= num; i += 2) {
    if (primes.every(function(p) { 
      return i % p;
    })) {
      primes.push(i);
    }
  }

  if (primes[primes.length - 1] === num) {
    return true;
  } else {
    return false;
  }
}