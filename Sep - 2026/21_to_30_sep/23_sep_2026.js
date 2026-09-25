function isMirror(str1, str2) {
// Keep only letters
const clean1 = str1.replace(/[^a-zA-Z]/g, "");
const clean2 = str2.replace(/[^a-zA-Z]/g, "");

// Reverse first string
const reversed = clean1.split("").reverse().join("");

return reversed === clean2;
}








