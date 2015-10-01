/*  Have the function TripleDouble(num1,num2) take both parameters being
/*  passed, and return 1 if there is a straight triple of a number at any place
/*  in num1 and also a straight double of the same number in num2. For example:
/*  if num1 equals 451999277 and num2 equals 41177722899, then return 1 because
/*  in the first parameter you have the straight triple 999 and you have a
/*  straight double, 99, of the same number in the second parameter. If this
/*  isn't the case, return 0. */


function TripleDouble(num1,num2) { 
	var num1Array = num1.toString().split(""),
      num2String = num2.toString(),
      matches = [],
      temp;
  
	for (var i = 0; i < num1Array.length; i++) { // find triples in num1
  	temp = [];

    if (num1Array[i] === num1Array[i + 1] && num1Array[i] === num1Array[i + 2]) {
      temp.push(num1Array[i], num1Array[i + 1]);
      matches.push(temp.join(""));
    }
  }
  
	if (matches.length === 0) {
    return 0;
  }

	for (var i = 0; i < matches.length; i++) { // find doubles matches in num 2
    if (num2String.search(matches[i]) >= 0) {
      return 1;
    }	else {
      return 0;
    }
  }
}