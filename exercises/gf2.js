//Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

//[4, 6, 23, 10, 1, 3]
//23
//4 + 6 + 10 + 3 TRUE


function ArrayAddition(arr) { 
    
   sum = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(sum), 1);
    console.log(arr)
    console.log(sum)

    function addNums(i = 0, s = 0, t = []){
        let result = []
        if (s === sum) {
            results.push()
        }
    }


    
  
  }


  console.log(ArrayAddition([4,6,23,10,1,3]))



