/*  Have the function DashInsertII(str) insert dashes ('-') between each two
/*  odd numbers and insert asterisks ('*') between each two even numbers in
/*  str. For example: if str is 4546793 the output should be 454*67-9-3. Don't
/*  count zero as an odd or even number. */


function DashInsertII(num) { 
  var temp = num.toString().split(""),
      output = [];
  
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] % 2 != 0 && temp[i + 1] % 2 != 0 && temp[i + 1] != undefined) {
      output.push(temp[i]);
      output.push("-");
    } else if (temp[i] % 2 === 0 && temp[i + 1] % 2 === 0 && temp[i] != 0 && temp[i + 1] != 0 && temp[i + 1] != undefined) {
      output.push(temp[i]);
      output.push("*");
    } else {
      output.push(temp[i]);
    }
  }

  return output.join("");    
}