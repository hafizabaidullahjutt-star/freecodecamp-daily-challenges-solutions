// @problem solves Acronym Builder problem
// @writer Abaidullah 
// @public (can be used)
function buildAcronym(str) {
  const ignore_words = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.split(/\s+/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word=words[i];
    const lowerWord=word.toLowerCase();

   if(i!==0 && ignore_words.has(lowerWord)){

       continue
    }
    result+=word[0]
}

  return result.toUpperCase();
}

const str = "Federal Bureau of Investigation";
console.log(buildAcronym(str));

const str_arr = str.split(" ");
const ignore_letters = ["a", "for", "an", "and", "by", "of"];
