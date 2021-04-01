// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {



}




let strOne = "Hello! world"
let strTwo = "ollEH world!!!!!"

console.log(strOne.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''))

console.log(strTwo.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''))









// console.log(strOne.replace(/[^\w]/g, "").toLowerCase().split("").sort().join(''))
// console.log(strTwo.replace(/[^\w]/g, "").toLowerCase().split("").sort().join(''))











// let stringA = "rAil safety"
// let stringB = "fairy tales"

// console.log(stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''))




module.exports = anagrams;






// if (stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')) {
//     return true
// } else {
//     return false
// }



// return cleanString(stringA) === cleanString(stringB)

// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');





// const aCharMap = buildCharMap(stringA);
// const bCharMap = buildCharMap(stringB);

// if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
// }
// for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]){
//         return false;
//     }
// }
// return true
// }

// function buildCharMap(str){
// const charMap = {};

// for (let char of str.replace(/[^\w]/g, '').toLowerCase() ){
//     charMap[char] = charMap[char] +1 || 1;
// }

// return charMap;



// stringA.replace(/[^\w]/g, "").split('').sort().join('').toLowerCase();
// stringB.replace(/[^\w]/g, "").split('').sort().join('').toLowerCase();
// if (stringA === stringB){
//     return true;
// }else{
//     return false
// }



// console.log(stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''));
// console.log(stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''));


// const aCharMap = buildCharMap(stringA);
// const bCharMap = buildCharMap(stringB)

// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false;
// }

// for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//         return false
//     }
// }

// return true

// }

// function buildCharMap(str) {
// const charMap = {};

// for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//     charMap[char] = charMap[char] + 1 || 1;
//      }

// return charMap
// }
