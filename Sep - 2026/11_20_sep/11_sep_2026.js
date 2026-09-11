// @Writer Abaidullah
// @problem Given string can be sperated by one or more spaces . Returen sentence should have only one space
// @access public (can be used)
function reverseSentence(str) {
  return str.split(/\s+/).reverse().join(" ");
}

console.log(
  `Reverse sentence is with no extra space: `,
  reverseSentence("npm  install  sudo"),
);
console.log(
  `Reverse sentence is with no extra space: `,
  reverseSentence("import    default   function  export"),
);
