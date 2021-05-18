

var hammingWeight = function(n) {
    let count=0;
    let arr=n.toString(2);
    console.log(arr);
    for(let x of arr){
        if(x==='1'){
            count++;
        }
    }
    console.log(count)
    return count;
};

n = 00000000000000111000000000001011;

hammingWeight(n)