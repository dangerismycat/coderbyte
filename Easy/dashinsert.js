/*	Have the function DashInsert(str) insert dashes ('-') between each two odd
	numbers in str. For example: if str is 454793 the output should be 4547-9-3.
	Don't count zero as an odd number. */

function DashInsert(str) {
  var temp;

  temp = str.toString().split("");

  for (var i = 0, len = temp.length; i < len; i++) {
    if (temp[i] % 2 === 1 && temp[i + 1] % 2 === 1) {
      temp.splice(i + 1, 0, "-");
    }
  }

  return temp.join("");
}