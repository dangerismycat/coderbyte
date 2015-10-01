/*  Have the function LookSaySequence(num) take the num parameter being passed
/*  and return the next number in the sequence according to the following rule:
/*  to generate the next number in a sequence read off the digits of the given
/*  number, counting the number of digits in groups of the same digit. For
/*  example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The
/*  11 comes from there being "one 1" before it and the 21 comes from there
/*  being "two 1's" before it. So your program should return the next number in
/*  the sequence given num. */


function LookSaySequence(num) { 
	var count = 0,
      output = [],
      numArray = num.toString().split("");
  
	for (var i = 0; i < numArray.length; i++) {
   	count++;

    if (numArray[i] != numArray[i + 1]) {
      output.push(count);
      output.push(numArray[i]);
      count = 0;
    }  
  }

	return output.join("");
}