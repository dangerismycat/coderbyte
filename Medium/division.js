/*  Have the function Division(num1,num2) take both parameters being passed and
/*  return the Greatest Common Factor. That is, return the greatest number that
/*  evenly goes into both numbers with no remainder. For example: 12 and 16
/*  both are divisible by 1, 2, and 4 so the output should be 4. The range for
/*  both parameters will be from 1 to 10^3. */


function Division(num1,num2) { 
  var factor1 = [],
      factor2 = [],
      gcf = [];
    
    for (var i = 0; i <= num1; i++) {
      if (num1 % i === 0) {
        factor1.push(i);
      }
    }
    for (var i = 0; i <= num2; i++) {
      if (num2 % i === 0) {
        factor2.push(i);
      }
    }

  for (var i = 0; i < factor1.length; i++) {
    for (var j = 0; j < factor2.length; j++) {
      if (factor1[i] === factor2[j]) {
        gcf.push(factor1[i]);
      }
    }
  }
 
  return gcf[gcf.length - 1];
}