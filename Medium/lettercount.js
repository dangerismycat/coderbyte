/*  Have the function LetterCount(str) take the str parameter being passed and
/*  return the first word with the greatest number of repeated letters. For
/*  example: "Today, is the greatest day ever!" should return greatest because
/*  it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If
/*  there are no words with repeating letters return -1. Words will be
/*  separated by spaces. */


function LetterCountI(str) { 
  var matches = [-1],
      numMatch = /[0-9]/g,
      highest = -1,
      highestIndex = 0,
      temp,
      maxRepeats,
      currentRepeats;

  temp = str.toLowerCase().split(" ");  // form array of words

  for (var i = 0; i < temp.length; i++) {  // iterate by word
    maxRepeats = 0;
    currentRepeats = 0;

    for (var j = 0; j < temp[i].length; j++) {  // iterate by letter
      currentRepeats = 0;  // reset current counter
      for (var k = 0; k < temp[i].length; k++) {  // iterate by letter again
        if ((temp[i].charAt(j) === temp[i].charAt(k)) && (j !== k)) {  // find repeats and don't count self-matches
          currentRepeats++;
        }
        if (currentRepeats > maxRepeats) {
          maxRepeats = currentRepeats;
        }      
      }     
    }

    if (maxRepeats > 0) {  // if matches have been found, push index & word to matches array
      matches.push(maxRepeats);
      matches.push(temp[i]);
    }

    maxRepeats = 0;  // reset max counter
  }

  for (var i = matches.length - 1; i > 0; i--) { // iterate through matches array backwards
    if (numMatch.test(matches[i])) { // look for numbers
      if (matches[i] >= highest) { // find the first instance of the highest number
        highest = matches[i];
        highestIndex = i;
      }
    }
  }

  if (highest === -1) {  // return -1 if no repeating letters
    return highest;
  } else {  // return first word with most repeating letters
    return matches[highestIndex + 1];
  }
}



