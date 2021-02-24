// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function revNum(int){
    const reversed = ((int).toString().split('').reverse().join(''))
    if (int < 0){
       return parseInt(reversed) * (-1)
    }
    else {
    return parseInt(reversed)
    }
}

console.log(revNum(-41))
   

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

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

// function reverse(str) {
// return (str).split('').reverse().join('')
  

// }

// console.log(reverse('abcd'))


