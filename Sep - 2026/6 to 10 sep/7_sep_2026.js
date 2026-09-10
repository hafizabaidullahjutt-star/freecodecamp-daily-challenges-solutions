const challengeData = {
  title: "Roman Numeral Parser",
  statement: `Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.`,
};
function parseRomanNumeral(s) {
  const obj = {I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000,};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = obj[s[i]];
    const next = obj[s[i + 1]];
    //current<next means it's true if (top element )< (bottom element)
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}
console.log(parseRomanNumeral("MMXXVI"));// 2026 as assumed
console.log(parseRomanNumeral("VII"));// 7 as expected
console.log(parseRomanNumeral("IX"));// 7 as expected




function runChallenge(data, outputContainer) {
  data.tests.forEach((testCase, index) => {
    const solution = rotate(testCase);
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
            <strong>Test Case ${index + 1}:</strong>
            <br>Input: <div class="matrix-display">${JSON.stringify(testCase)}</div>
            <br>Rotated 90° Output: <div class="matrix-display" style="color: #16a34a;">${JSON.stringify(solution)}</div>
        `;
    outputContainer.appendChild(card);
  });
}
