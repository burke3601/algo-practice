// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
   const charMap = {};
   let max = 0;
   let maxChar = '';

   for(let char of str){
       if (charMap[char]){
            charMap[char] ++
       } else {
           charMap[char] = 1
       }

   }
   for(let char in charMap){
       if (charMap[char] > max){
           max = charMap[char];
           maxChar = char
       }
   }
   return maxChar

}


console.log(maxChar('abccccccd'))
console.log(maxChar('1234567777777890'))
console.log(maxChar('12345677777778ggggggggggg90'))





module.exports = maxChar;











// {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';


//     for (let char of str){
//         if (charMap[char]){
//             charMap[char] ++;
//         } else {
//             charMap[char] = 1
//         }
//     }

//     for (let char in charMap){
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char
//         }
//     }

//     return maxChar
// }





// const charMap = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//    if (charMap[char]) {
//        charMap[char] ++;
//    } else {
//        charMap[char] = 1
//    }
// }

// for (let char in charMap){
//    if (charMap[char] > max){
//        max = charMap[char];
//        maxChar = char;
//        console.log(charMap)
//    }
   
// }

// return maxChar;




// console.log("abcccccd")

// let str = 'abccccd'
// let chars = {};

// for (let char of str) {
//     if(!chars[char]) {
//         chars[char] =1
//     } else {
//         chars[char]++;
//     }
// }



