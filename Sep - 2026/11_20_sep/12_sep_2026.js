// @Writer Abaidullah
/* @problem In array of 7 length,each represents hours of a day .Determine screen time based on :
    i) any single day hour >=10 hour 
    ii) Avg (3 days(h))>= 8 hour
    iii) Avg. (7 days (h)) >=6 hour

*/
// @access public (can be used)

function tooMuchScreenTime(arr) {
  let flag = false;
  let result = 0;
  let accumulation = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      flag = true;
    }
    result += arr[i];
    if (i > 2) {
      result -= arr[i - 3];
    }

    if (result / 3 >= 8) {
      flag = true;
    }
    accumulation += arr[i];
  }
  if (accumulation / 7 >= 6) {
    flag = true;
  }
  return flag;
}
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));
console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
