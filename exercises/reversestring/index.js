// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    
const arr = str.split('');
return arr.reverse().join("");

}

console.log(reverse('abcdefg'))

module.exports = reverse;

// return str.split('').reduce((reversed, character) => {
    
//   console.log(character + reversed)
//   return character + reversed
// }, '')

//second option
// function reverse(str) {
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed 
// }

//reverse
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('')
// }