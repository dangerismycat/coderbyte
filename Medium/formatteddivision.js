/*  Have the function FormattedDivision(num1,num2) take both parameters being
/*  passed, divide num1 by num2, and return the result as a string with
/*  properly formatted commas and 4 significant digits after the decimal place.
/*  For example: if num1 is 123456789 and num2 is 10000 the output should be
/*  "12,345.6789". The output must contain a number in the one's place even if
/*  it is a zero. */


function FormattedDivision(num1,num2) { 
  var raw = num1 / num2,
      rawArray = raw.toFixed(4).toString().split(""),
      integer = rawArray.slice(0, rawArray.indexOf(".")),
      frac = rawArray.slice(rawArray.indexOf(".")),
      temp;
  
  if (integer.length > 3) {
    temp = [];

    for (var i = integer.length - 1; i >= 0; i -= 3) {
      temp.unshift(integer[i]);

      if (integer[i - 1]) {
        temp.unshift(integer[i - 1]);
      }
      if (integer[i - 2]) {
        temp.unshift(integer[i - 2]);
      }
      if (integer[i - 3]) {
        temp.unshift(",");
      }
    }

  integer = temp;
  }

  return integer.join("") + frac.join("");     
}