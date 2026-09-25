

function isPerfectSquare(n) {
    let num=Math.floor(Math.sqrt(n));

    return n==(num*num);
}
console.log(isPerfectSquare(-9));
console.log(isPerfectSquare(99));
console.log(Math.sqrt(99));

