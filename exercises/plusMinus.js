//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.


//[1,1,0,-1,-1]
// .4 , .4, .2

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > 0){
            positive ++
        } else if(arr[i] < 0){
            negative ++
        } else {
            zero ++
        }
    }
    
    const posRat = positive / arr.length;
    
    const negRat = negative / arr.length;
    
    const zeroRat = zero / arr.length;
    

    return (posRat, negRat, zeroRat)
}

console.log(plusMinus([1,1,0,-1,-1]))