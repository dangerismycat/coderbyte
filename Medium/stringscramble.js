/*  Have the function StringScramble(str1,str2) take both parameters being
/*  passed and return the string true if a portion of str1 characters can be
/*  rearranged to match str2, otherwise return the string false. For example:
/*  if str1 is "rkqodlw" and str2 is "world" the output should return true.
/*  Punctuation and symbols will not be entered with the parameters. */


function StringScramble(str1,str2) { 
  var output = [],
      str1Array = str1.toLowerCase().split(""),
      str2Array = str2.toLowerCase().split("");
    
  for (var i = 0; i < str2Array.length; i++) {
    for (var j = 0; j < str1Array.length; j++) {
      if (str2Array[i] === str1Array[j]) {
        output.push(str1Array[j]);
        str1Array.splice(j, 1);
        break;
      }
    }
  }
  
  return output.join("") === str2;   
}