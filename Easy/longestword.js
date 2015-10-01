/*    Have the function LongestWord(sen) take the sen parameter being passed and
    return the largest word in the string. If there are two or more words that are
    the same length, return the first word from the string with that length. Ignore
    punctuation and assume sen will not be empty. */


function LongestWord(sen) { 
    var x = 0;
    var longestWord = "";
    var array = sen.split(" ");
    for (var i = 0; array[i]; i++) {
      if (array[i].length > x) {
        longestWord = array[i];
        x = array[i].length;
      }
    }
    return longestWord;      
}


//refactored for functional approach

function LongestWord2(sen) {
  var tempSen = "",
      chars = /[^A-Za-z ]/gi,
      tempArr = [];

  // remove characters that aren't letters or spaces
  tempSen = sen.replace(chars, "");

  // make array of words
  output = tempSen.split(" ");

  // find longest word and return it
  return output.reduceRight(function(a, b) {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  });  
}