function countTinyPairs(a,b,k){
    let count = 0;

    for(let i = 0; i< a.length; i ++){
        let stringA = a[i].toString();
        let stringB = b[b.length -1 - i].toString();
        
        let result = parseInt(stringA + stringB);
        console.log(result)

        
        if(result < k){
            count ++;
        }
    }
    
    console.log(count);

}

//array a iterate left to right
//array b iterate right to left
//if concat a b < k it is tiny pair

countTinyPairs([1,2,3], [1,2,3], 31)
countTinyPairs([16,1,4,2,14], [7,11,2,0,15], 743)