var runningSum = function(nums) {
    let sum = [];
    sum[0] = nums[0];
    
    for(let i = 1; i < nums.length; i ++){
        
        sum[i] = nums[i] +sum[i-1]
        
    }
    console.log(sum)
    
};

runningSum([1,2,3,4])