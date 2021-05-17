function mutateTheArray(n, a){
    let b = [];

    for(let i = 0; i <n; i++){
        let x = a[i-1]
        let y = a[i]
        let z = a[i +1]
        if(x == NaN || x == null || x == undefined){ 
            x=0
            //console.log(x)
        } 
        if(y == NaN || y == null || y == undefined){ 
            y=0
            //console.log(x)
        } 
        if(z == NaN || z == null || z == undefined){ 
            z=0
            //console.log(x)
        }
        b[i] = x+y+z;
        //console.log(x)
        
    }
    console.log(b)
}


//int n is == length of array a
// b[i] = a[i-1]+ a[i]+ a[i+1]
//is the sum

mutateTheArray(5,[4,0,1,-2,3])