function findPairsSummingToK(a, m, k) {
    let b = []

    let count = 0;
    for(let i = 0; i < a.length; i++){
    //console.log(a.slice(i, m+i))
    b = a.slice(i, m+i);
    //    console.log(b)
        for(let j = 0; j<m; j ++){
            //console.log(b)
            if(b[i] + b[j] == k && (b[i] != b[j]) && b.length == m){
                count ++
            }
            
        }
        console.log(count, "is count")
    
}
    
   
}

let a = [2,3,7,6,3,4]
let m=4
let k=10





//console.log(findPairsSummingToK(a,m,k))


    