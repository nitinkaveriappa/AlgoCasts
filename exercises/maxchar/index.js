// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  // for...of Iterate String, array. Returns value.
  for (const char of str) {
    if (charMap[char]) charMap[char]++;
    else charMap[char] = 1;
  }
  let max = 0;
  let maxChar = '';
  // for...in Iterate Object, String, Array. Returns index
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
