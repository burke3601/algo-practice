// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterate through rows
//create stair empty str

//iterate through columns

function steps(n) {
   for (let row = 0; row < n; row ++ ){
       let stair = ''

       for (let column = 0; column < n; column ++){
           if (column <= row){
               stair += '#';
           }
           else {
               stair += ' ';
           }
       }

       console.log(stair)
   }
}

console.log(steps(5))



module.exports = steps;


















// for (let row =0; row < n; row++){
//     let stair = "";

//     for (let column = 0; column < n; column++){
//         if (column <= row){
//             stair += '#';
//         } else {
//             stair += " ";
//         }
//     }
//     console.log(stair)
// }










// if (n === row){
//     return;
// }

// if (n === stair.length){
//     console.log(stair);
//     return steps(n, row +1);
// }

// if (stair.length <= row) {
//     stair += '#';
// } else {
//     stair += " ";
// }
// steps(n, row, stair);

// for (let row = 0; row < n; row++){
//     let stair = "";

//     for (let column =0; column < n; column ++){
//         if (column <= row){
//             stair += '#';
//         } else {
//             stair += " ";
//         }
//     }
//     console.log(stair)
// }


//recursion notes
// function printNumber(n) {
//     if (n === 0){
//         return;
//     }
//     console.log(n);
//     printNumber(n-1)

// }
// console.log(printNumber(10));
