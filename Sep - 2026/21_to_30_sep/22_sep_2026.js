// @Writer Abaidullah
// @Given i)if digits > letters  ,then digits
//        ii)if letters > digits ,then letters
//        iii)digit ===letters ,then tie

// @required The number of videos the hard drive can store

// @access public (can be used)

function digitsOrLetters(str) {
  let digits = 0,
    letters = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    console.log("ch", ch);

    if (
      (ch >= 65 && ch <= 90) || // A-Z
      (ch >= 97 && ch <= 122) // a-z
    ) {
      letters++;
    } else if (ch >= 48 && ch <= 57) {
      // 0-9
      digits++;
    }
  }
  console.log(digits, letters);

  if (digits > letters) {
    return "digits";
  } else if (digits < letters) {
    return "letters";
  } else {
    return "tie";
  }
}

console.log(digitsOrLetters("1120"));
