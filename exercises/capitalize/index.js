// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



function capitalize(str) {

  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1))
  }
return words.join(' ')
}

console.log(capitalize('a short sentence'))

let test = 'i am a test'

// console.log(test.slice(1))

console.log("hi \npal")

let test = "abcd"















// {
    
//   const words = [];

//   for( let s of str.split(" ")){
//     words.push(s[0].toUpperCase() + s.slice(1))
//   }
//   console.log(words)

//   return(words.join (' '))

// }



// console.log(capitalize("I am a fun guy and i like to party"))



 












//  const words = [];

//  for(let word of str.split(' ')) {
//    words.push(word[0].toUpperCase() + word.slice(1))
//  }


// return words.join(' ')



    //  for (let word of str.split(' ')){
    //      words.push(word[0].toUpperCase() + word.slice(1))
    //  } console.log(words)



   



module.exports = capitalize;








// function capitalize(str) {

//   const words = [];

// for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
// }
// return words.join(' ');
   
  
// }
// console.log(capitalize('a little dog'))
// module.exports = capitalize;





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






