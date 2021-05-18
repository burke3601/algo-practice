// var twoSum = function(nums, target) {
//     //console.log(nums, target)
    
//     let vals = {};

//     for (let i = 0; i < nums.length; i++) {
//       if (target - nums[i] in vals) {
//         return [vals[target-nums[i]], i];
//       } else {
//         vals[nums[i]] = i;
//       }
//     }
//     return [];


// };

// nums = [2,7,11,15];
// target = 6;

// twoSum(nums, target)

function twoSum(nums, target){
    let vals = {};

    for(let i = 0; i <nums.length; i ++){
        if(target - nums[i] in vals){
            console.log([vals[target-nums[i], i]])
        }else{
            vals[nums[i]] = i;
        }
    }
    return [];
}


nums = [2,7,11,15]
target = 18;
twoSum(nums, target)
