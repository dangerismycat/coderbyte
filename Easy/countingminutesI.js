/*    Have the function CountingMinutesI(str) take the str parameter being passed
    which will be two times (each properly formatted with a colon and am or pm)
    separated by a hyphen and return the total number of minutes between the two
    times. The time will be in a 12 hour clock format. For example: if str is
    9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output
    should be 1320. */

function CountingMinutesI(str) {
  var start,
      end,
      startMin,
      endMin,
      startHour,
      endHour;

  start = str.slice(0, str.indexOf("-"));
  end = str.slice(str.indexOf("-") + 1);
  startMin = Number(start.slice(start.indexOf(":") + 1, start.indexOf(":") + 3));
  endMin = Number(end.slice(end.indexOf(":") + 1, end.indexOf(":") + 3));
  startHour = Number(start.slice(0, start.indexOf(":")));
  endHour = Number(end.slice(0, end.indexOf(":")));

  if ((start.charAt(5) === 'p' || start.charAt(4) === 'p') && startHour !== 12) {
    startHour += 12;
  }
  if ((end.charAt(5) === 'p' || end.charAt(4) === 'p') && endHour !== 12) {
    endHour += 12;
  }
  if (start.charAt(5) === 'a' && startHour === 12) {
    startHour = 0;
  }
  if (end.charAt(5) === 'a' && endHour === 12) {
    endHour = 0;
  }
  
  startMin += startHour * 60;
  endMin += endHour * 60;
  
  if (endMin === 0) {
    endMin = 1440;
  }
  
  if (endMin > startMin) {
    return endMin - startMin;
  } else {
    return (1440 - startMin) + endMin;
  }
}