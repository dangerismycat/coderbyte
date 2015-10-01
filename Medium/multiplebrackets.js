/*  Have the function MultipleBrackets(str) take the str parameter being passed
/*  and return 1 #ofBrackets if the brackets are correctly matched and each one
/*  is accounted for. Otherwise return 0. For example: if str is "(hello
/*  [world])(!)", then the output should be 1 3 because all the brackets are
/*  matched and there are 3 pairs of brackets, but if str is "((hello [world])"
/*  the the output should be 0 because the brackets do not correctly match up.
/*  Only "(", ")", "[", and "]" will be used as brackets. If str contains no
/*  brackets return 1. */


function MultipleBrackets(str) { 
	var count = 0,
      pCount = 0,
      bCount = 0,
      array = str.split("");
  
	for (var i = 0; i < array.length; i++) {
   	if (pCount < 0 || bCount < 0) {
      return 0;
    }
    if (array[i] === "(") {
      count++;
      pCount++;
    }
    if (array[i] === "[") {
      count++;
      bCount++;
    }
    if (array[i] === ")") {
      pCount--;
    }
    if (array[i] === "]") {
      bCount--;
    }
  }

  if (count === 0 && pCount === 0 && bCount === 0) {
    return 1;
  } else if (count > 0 && pCount === 0 && bCount === 0) {
    return 1 + " " + count;
  }	else {
    return 0;
  }
}


// refactored for functional approach

function MultipleBrackets2(str) { 
  var count = 0,
      pCount = 0,
      bCount = 0,
      array = str.split("");
  
  array.forEach(function(item) {
    if (pCount < 0 || bCount < 0) {
      return;
    } else if (item === "(") {
      count++;
      pCount++;
    } else if (item === "[") {
      count++;
      bCount++;
    } else if (item === ")") {
      pCount--;
    } else if (item === "]") {
      bCount--;
    }
  });

  if (count === 0 && pCount === 0 && bCount === 0) {
    return 1;
  } else if (count > 0 && pCount === 0 && bCount === 0) {
    return 1 + " " + count;
  } else {
    return 0;
  }
}



