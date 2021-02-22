// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    
  return str.split('').reduce((reversed, character) => {
    
    console.log(character + reversed)
    return character + reversed
  }, '')
}

reverse('abcdefg')

module.exports = reverse;

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