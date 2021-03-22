// function diagonalDifference(arr) {
   

// }
// let arr =
// [1,2,3,
//  4,5,6,
//  7,8,9];
//1+5+9 = 15
//3+5+7 = 15
 //[1,2,3,4,5,6,7,8,9]

 //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

 //[0,1,2,3,
//  4,5,6,7,
//  8,9,10,11,
//  12,13,14,15]





// function aVeryBigSum(ar) {

// let long = 0;
// for (let n in ar) { long += ar[n]; }
   
// return long

// }
// let ar = [1,2,3,4]
// aVeryBigSum(ar)


// function compareTriplets(a, b) {
//    let counterA = 0,counterB = 0;

//    for(let i=0;i<a.length;i++){
//        if(a[i] > b[i]){
//            counterA++;
//        }
//        else if(a[i] < b[i]){
//            counterB++;
//        }
//    }

//    return [counterA,counterB];
   

// }
// let a = [1, 2, 3]
// let b = [3, 2, 1]

// console.log(compareTriplets(a,b))







// function oddNumbers(l, r) {
//    var x = [],
//    i = Math.floor(l/2) * 2 + 1;

//    while (i<r) {
//       x.push(i);
//       i += 2;
//    }
//    return x

// }

// console.log(oddNumbers(6, 18))


// function simpleArraySum(ar) {
  

// }

let numbers = [1,2,3,4];
let total=0;
for(let i in numbers) 
{ total += numbers[i]; }
   
console.log(total)








// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//the one at the bottom is better, more legible
// function capitalize(str) {
//    // const words = [];

//    // for (let word of str.split(" ")) {
//    //    words.push(word[0].toUppercase() + word.slice(1));
//    // }
   
//    // return words.join(' ');
   
    
  
// }

//
// const words = [];
// let str = 'a little dog'
// for (let word of str.split(" ")) {
//    words.push(word[0].toUppercase() + word.slice(1));
// }
// words.join(' ')
// console.log(words);




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
 
// }


// module.exports = anagrams;

// const word = "Hi THERE!!!!"

// const word2 = "erehthi"

// console.log(word.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''))

// console.log(word2.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''))








// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// function chunk(array, size) {
//   const chunked = [];
//   let index = 0

//   for (let element of array) {
//    const last = chunked[chunked.length -1]

//    if (!last || last.length === size){
//       chunked.push([element]);
//    } else {
//       last.push(element)
//    }
//   }

//   return chunked;


//  }

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4))














//  const chunked  = []
//  let index = 0;

//  while(index < array.length) {
//      chunked.push(array.slice(index, index + size));
//      index += size;
//  }
//  return chunked;




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
   
//    }

// stringA = "HeLlo! yoU"
// stringB = "helloyou"

// console.log(stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(""))
// console.log(stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(""))




// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// function revNum(int) {
//    const num1 = int.toString().split('').reverse().join('');
//    if (int < 0) {
//       return parseInt(num1 * -1)
//    } else {
//    return parseInt(num1)
//    }
   
// }
// console.log(revNum(-1234))
















// function revNum(int){
//     const reversed = ((int).toString().split('').reverse().join(''))
//     if (int < 0){
//        return parseInt(reversed) * (-1)
//     }
//     else {
//     return parseInt(reversed)
//     }
// }

// console.log(revNum(-41))
   

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// let str = "abqewqwerfvba"
// function pal(str) {
//    let palin = str.split("").reverse().join("")

//    if (str === palin){
//       return true
//    } else {
//       return false
//    }

// }

// console.log(pal(str))













// const reverse = require("../reversestring");

// function pal(str) {
//     if( str === str.split('').reverse().join('')) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(pal('abffffffffa'))
// console.log(pal('kayak'))


// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// let str = 'olleh'
// function rev(str) {

   
   
// }
// console.log(str.split('').reverse().join(""))

// rev()









// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// return (str).split('').reverse().join('')
  

// }

// console.log(reverse('abcd'))


