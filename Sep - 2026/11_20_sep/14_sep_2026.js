// @Writer Abaidullah
// @probelm Give an paragraph sperated by spaces.Ignore case and puntucation

//@required Given an array of" three words" frequentlty "occuring word first" in "ascending order with lower case"
// @access public (can be used)
function getWords(arr) {
  const words = arr.toLowerCase().match(/\b[\w']+\b/g);
  const frequencyMap = {};
  for (const ele of words) {
    frequencyMap[ele] = (frequencyMap[ele] || 0) + 1;
  }
  const sortedWords = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  return sortedWords.slice(0, 3).map((x) => x[0]);
}

let arr =
  "Coding in Python is fun because coding Python allows for coding in Python easily while coding";

console.log(sortedWords);

const filtered = [...new Set(words)];

console.log(words);
console.log(filtered);
