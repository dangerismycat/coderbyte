/*    Have the function OffLineMinimum(strArr) take the strArr parameter being passed
    which will be an array of integers ranging from 1...n and the letter "E" and
    return the correct subset based on the following rules. The input will be in the
    following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for
    integers and the E means take out the smallest integer currently in the whole
    set. When finished, your program should return that new set with integers
    separated by commas. For example: if strArr is
    ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. */

function OffLineMinimum(strArr) { 
  var outputArray = [],
      numCheck = /[0-9]/g,
      numArray = [],
      temp = strArr,
      smallest,
      index;

  for (var i = 0; i < temp.length; i++) { // for loop to search temp for numbers and push them to numArray
    if (numCheck.test(temp[i])) {
      numArray.push(temp[i]);
    } else { // when a non-number is found:
      smallest = 10;
      index = 0;

      for (var j = 0; j < numArray.length; j++) {  // for loop to find smallest integer
        if (numArray[j] < smallest) {
          smallest = numArray[j];
          index = j;
        }
      }

      if (smallest != 10) {
        outputArray.push(smallest); // push smallest integer to outputArray
        numArray.splice(index, 1);  // remove smallest integer from numArray
      }
    }
  }

  return outputArray.join();       
}


// refactored for functional approach

function OffLineMinimum2(strArr) { 
  var numCheck = /[0-9]/g,
      outputArray = [],
      numArray = [];

  strArr.forEach(function(item) {
    if (item.match(numCheck) !== null) {  // search strArr for numbers and push them to numArray
      numArray.push(item);
    } else {  // when a non-number is found:
      numArray.sort(function(a, b) {  // sort numArray in descending order
        return b - a;
      });
      outputArray.push(numArray.pop()); // remove last (smallest) number and add to outputArray
    }
  });

  return outputArray.join();       
}