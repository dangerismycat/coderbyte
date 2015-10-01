/* 	Have the function DistinctList(arr) take the array of numbers stored in arr
/* 	and determine the total number of duplicate entries. For example if the
/* 	input is [1, 2, 2, 2, 3] then your program should output 2 because there
/* 	are two duplicates of one of the elements. */


function DistinctList(arr) { 
	var count = 0,
      temp = arr.sort(function(a, b) {
        return a - b
      });
  
	for (var i = 0; i < temp.length; i++) {
   	if (temp[i] === temp[i + 1]) {
      count++;
    }
  }
  
	return count;
}