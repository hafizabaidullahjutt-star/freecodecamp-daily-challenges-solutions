// @Writer Abaidullah
/* @Given An array (unsorted or may contain duplicated) of integers between 1 to n where n is lageset integer

@Required: Return an sorted array of all missing numbers between 1 to n which should be in ascending order 

*/
// @access public (can be used)
function findMissingNumbers(arr) {
const filter=[...new Set(arr)].sort((a,b)=> a-b)
let next=1;
let missing=[];
for(let i=0;i<filter.length;i++){
    while(next<filter[i]){
        missing.push(next);
        next++;
    }
    next++;
}
  return missing;
}





console.log(findMissingNumbers([1, 3, 5]));                    // [2, 4]
console.log(findMissingNumbers([1, 2, 3, 4, 5]));              // []
console.log(findMissingNumbers([1, 10]));                      // [2,3,4,5,6,7,8,9]
console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));        // [2,3,4,5,6,7,8,9]
console.log(findMissingNumbers([3,1,4,1,5,9]));                // [2,6,7,8]
console.log(findMissingNumbers([1,2,3,4,5,7,8,9,10,12,6,8,9,3,2,10,7,4])); // [11]

