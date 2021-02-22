// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   const reversed = n.toString().split('').reverse().join('');

  
   return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

const num = -200
console.log(num.toString().split('').reverse())
console.log(num.toString().split('').reverse().join(''))
console.log(parseInt(num.toString().split('').reverse().join('')))
console.log(Math.sign(parseInt(num.toString().split('').reverse().join(''))))

// console.log(Math.sign(900))

// console.log(parseInt(num.toString()))


