// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//the one at the bottom is better, more legible
function capitalize(str) {

  const words = [];

for (let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
}
return words.join(' ');
   
  
}
module.exports = capitalize;






// let words = []
// sent = ('a short sentence')
// console.log((sent).split(" "))
// let str = "a short sentence buddy pal"
// const words = [];
//     for (let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     } console.log(words)

// const words = [];
// for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1))
// }

// return words.join(' ')

// let result = str[0].toUpperCase();

//  for (let i =1; i< str.length; i++){
//     if (str[i-1] === ' '){
//         result += str[i].toUpperCase();
//     } else {
//         result += str[i]
//     }
// }
// return result;


// const words = [];

// for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
// }
// return words.join(' ');






