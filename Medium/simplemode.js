/*  Have the function SimpleMode(arr) take the array of numbers stored in arr
/*  and return the number that appears most frequently (the mode). For example:
/*  if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more
/*  than one mode return the one that appeared in the array first (ie. [5, 10,
/*  10, 6, 5] should return 5 because it appeared first). If there is no mode
/*  return -1. The array will not be empty. */


function SimpleMode(arr) { 
  var mode = null,
      allCounter = 1,
      currentCounter;
  
  for (var i = 0; i < arr.length; i++) {
    currentCounter = 0;

    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCounter++;
      }
    }

    if (currentCounter > allCounter) {
      allCounter = currentCounter;
      mode = arr[i];
    }
  }

  if (mode !== null) {
    return mode;
  } else {
    return -1;
  }
}


// refactored for functional approach

function SimpleMode2(arr) { 
  var mode = null,
      allCounter = 1,
      currentCounter;
  
  arr.forEach(function(item) {
    currentCounter = 0;

    arr.forEach(function(otherItem) {
      if (item === otherItem) {
        currentCounter++;
      }
    });

    if (currentCounter > allCounter) {
      allCounter = currentCounter;
      mode = item;
    }
  });

  if (mode !== null) {
    return mode;
  } else {
    return -1;
  }
}