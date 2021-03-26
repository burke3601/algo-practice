// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

let array = [2, 3, 4, 3, 6, 7]

let hashTwoSum = (array, sum) => {
    let storageHash = {}
    let nums = []
    
    for(let i in array){
      let addend = sum - array[i]
        
        if (addend in storageHash){
            nums.push([addend, array[i]])
        }
        storageHash[array[i]] = i
    }
    return nums
}



console.log(hashTwoSum(array, 6))



//need to scale down time complexity
// var twoSum = function(nums, target) {
    
// };

// console.log(twoSum([1,2,3,4], 7));

// let numbers = [];
    
//     for (let i = 0; i < nums.length; i ++){
//        for (let j = i +1; j < nums.length; j ++){
//            if(nums[i] + nums[j] === target){
//                numbers.push(i);
//                numbers.push(j);
//            }
//        }
//     }
//     return numbers;