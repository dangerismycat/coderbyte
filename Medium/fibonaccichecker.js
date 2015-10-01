/*  Have the function FibonacciChecker(num) return the string yes if the number
/*  given is part of the Fibonacci sequence. This sequence is defined by: Fn =
/*  Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up.
/*  The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not
/*  in the Fibonacci sequence, return the string no. */


function FibonacciChecker(num) { 
  var array = [1, 0];

  function fibonacciRecursion(num) {  // recursive function to generate Fibonacci seq up to num
    if (array[0] >= num) {  // check if latest Fibonacci number is equal or over num
      return;
    } else {  // if not, add next Fibonacci number to array
      array.unshift(array[0] + array[1]);
      fibonacciRecursion(num);
    }
  }

  fibonacciRecursion(num);

  if (array[0] === num) {
    return "yes";
  } else {
    return "no";
  }
}