// @problem (solves symmetric differnce between two arrays) 
// @writer Abaidullah 
// @public (can be used)
function arrayDiff(arr1, arr2) {
  const result = [...new Set([...arr1, ...arr2])]
    .filter(
      (x) =>
        (arr1.includes(x) && !arr2.includes(x)) ||
        (arr2.includes(x) && !arr1.includes(x)),
    )
    .sort((a, b) => a.localeCompare(b));

  return result;
}

console.log(`Symmetric differnce of array is  `,arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]));
console.log(`Symmetric differnce of array is  `,arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]));
console.log(`Symmetric differnce of array is  `,arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]));



const arr1 = ["I", "like", "freeCodeCamp"];
const arr2 = ["I", "like", "rocks"];
const [small, other] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

const merge = new Set([...small, ...other]);

for (const ele of small) {
  if (arr2.includes(ele)) {
    merge.delete(ele);
  }
}
// console.log(arrayDiff(small, other));  //for debug
