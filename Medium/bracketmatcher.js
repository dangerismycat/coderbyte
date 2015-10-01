/* 	Have the function BracketMatcher(str) take the str parameter being passed
/* 	and return 1 if the brackets are correctly matched and each one is
/* 	accounted for. Otherwise return 0. For example: if str is "(hello
/* 	(world))", then the output should be 1, but if str is "((hello (world))"
/* 	the the output should be 0 because the brackets do not correctly match up.
/* 	Only "(" and ")" will be used as brackets. If str contains no brackets
/* 	return 1. */


function BracketMatcher(str) { 
	var count = 0,
      tempArray = str.split("");
  
  if (str.match(/[()]/) === null) {
    return 0;
  }

  for (var i = 0; i < tempArray.length; i++) {
		if (count < 0) {
      return 0;
    }
    if (tempArray[i] === "(") {
      count++;
    }
    if (tempArray[i] === ")") {
      count--;
    }
  }
  
	if (count === 0) {
    return 1;
  }	else {
    return 0;
  }
}


// refactored for functional approach

function BracketMatcher2(str) { 
  var count = 0,
      tempArray = str.split("");
  
  if (str.match(/[()]/) === null) {
    return 0;
  }

  tempArray.forEach(function(item) {
    if (count < 0) {
      return;
    }
    if (item === "(") {
      count++;
    }
    if (item === ")") {
      count--;
    }
  });
  
  if (count === 0) {
    return 1;
  } else {
    return 0;
  }
}