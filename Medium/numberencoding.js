/* 	Have the function NumberEncoding(str) take the str parameter and encode the
/* 	message according to the following rule: encode every letter into its
/* 	corresponding numbered position in the alphabet. Symbols and spaces will
/* 	also be used in the input. For example: if str is "af5c a#!" then your
/* 	program should return 1653 1#!. */


function NumberEncoding(str) { 
  var temp = str.toLowerCase().split(""),
      letters = /[a-z]/gi,
      output;

  output = temp.map(function(item) {
  	if (item.match(letters) != null) {
  		return item = Number(item.charCodeAt() - 96);
  	} else {
      return item;
    }
  });
  	
	return output.join("");   
}