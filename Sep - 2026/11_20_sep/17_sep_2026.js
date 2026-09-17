function generateSlug(str) {
let result = "";
str=str.trim();
let spaceFlag=false;

for (let i = 0; i < str.length; i++) {
  const word = str[i].toLowerCase(),
    code = word.charCodeAt(0);
  if (
    (code >= 65 && code <= 90)  ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  ) {
    result+=word;
    spaceFlag=false;
  } else if (code == 32) {
    if(!spaceFlag){
        result+="%20"
        spaceFlag=true;
    }
  }
}
  return result;
}


console.log(generateSlug("hello  world"));

console.log("ok");
