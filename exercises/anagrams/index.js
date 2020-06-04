// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const charMap = (str) => {
//     const charMap = {};
//     const lowerStr = str.toLowerCase();
//     for (const char of lowerStr) {
//       if (
//         char.codePointAt(0) >= 'a'.codePointAt(0) &&
//         char.codePointAt(0) <= 'z'.codePointAt(0)
//       ) {
//         if (charMap[char]) charMap[char]++;
//         else charMap[char] = 1;
//       }
//     }
//     return charMap;
//   };
//   const checkCharMapsEqual = (str1, str2) => {
//     if (Object.keys(str1).length !== Object.keys(str2).length) return false;
//     for (const char in str1) {
//       if (str1[char] !== str2[char]) {
//         return false;
//       }
//     }
//     return true;
//   };
//   return checkCharMapsEqual(charMap(stringA), charMap(stringB));
// }

function anagrams(stringA, stringB) {
  const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
