// Given an array nums, partition it into two (contiguous) subarrays left and right so that:

// Every element in left is less than or equal to every element in right.
// left and right are non-empty.
// left has the smallest possible size.
// Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

// Example 1:

// Input: nums = [5,0,3,8,6]
// Output: 3
// Explanation: left = [5,0,3], right = [8,6]
// Example 2:

// Input: nums = [1,1,1,0,6,12]
// Output: 4
// Explanation: left = [1,1,1,0], right = [6,12]

var partitionDisjoint = function(nums) {
    let left = [];
    let right = [];

    for(let i = 0; i < nums.length; i++){
        const cur = nums[i]

        if(i ==0){
            left.push(cur);
            continue
        }
        const last = Math.max.apply(this, left)

        if(cur < last && i!==nums.length-1) {
            left.push(cur);
                if(right.length > 0) { 
                    while(right.length) left.push(right.shift());
                }
            } else {
            right.push(cur);
        }

    }
    console.log(left, right)
    return left.length
    
};

console.log(partitionDisjoint([5,0,3,8,6]))
console.log(partitionDisjoint([1,1,1,0,6,12]))