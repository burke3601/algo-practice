var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    let answerArray =[];
   for(let i = 0; i <candies.length; i ++){
        if(candies[i] > max){
            max = candies[i]
        }
        
   }

   for(let i = 0; i <candies.length; i ++){
    
        if((candies[i] + extraCandies) >= max){
            answerArray[i] = true;
        }else{
            answerArray[i]= false;
        }
    }
    return(answerArray)
    
};



kidsWithCandies([2,3,5,1,3], 3);