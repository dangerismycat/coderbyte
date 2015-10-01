/*    Have the function MeanMode(arr) take the array of numbers stored in arr and
    return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5,
    3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array
    will not be empty, will only contain positive integers, and will not contain
    more than one mode. */

function MeanMode(arr) { 
  var mean = 0,
      mode = 0,
      allCounter,
      currentCounter;

  // calculate the mean
  for (var i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  mean = mean / arr.length;

  // calculate the mode
  allCounter = 0;

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

  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}


// refactored for functional approach

function MeanMode2(arr) { 
  var mean = 0,
      mode = 0,
      allCounter,
      currentCounter;

  // calculate the mean
  mean = arr.reduce(function(total, number) {
    return total + number;
  });

  mean = mean / arr.length;

  // calculate the mode
  allCounter = 0;

  arr.forEach(function(first) {
    currentCounter = 0;

    arr.forEach(function(second) {
      if (first === second) {
        currentCounter++;
      }
    });

    if (currentCounter > allCounter) {
      allCounter = currentCounter;
      mode = first;
    }
  });

  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}