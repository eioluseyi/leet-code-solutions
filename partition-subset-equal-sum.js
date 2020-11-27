/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // Sum all numbers in array
    let sum = nums.reduce((a, b) => { return a + b }, 0);
    if (sum % 2 !== 0) {
        return false
    } else {
        let half = sum/2;        
        if (nums.find((x)=> x == half)) {
            return true;
        } else if (nums.find((x)=> x > half)) {
            return false;
        } else {
            let ansarr = [];
            nums = nums.sort().reverse();
            
            let solve = (pivot, presum) => {
                if (ansarr.includes(true)) {
                    return true;
                }
                let newsum = nums[pivot] + presum;
                
                if (newsum > half) {
                    if (pivot === nums.length - 1) {
                        if (!ansarr.includes(false)) {
                            ansarr.push(false);
                        }
                    } else {
                        solve(pivot + 1, presum);
                    }
                } else if (newsum < half) {
                    if (pivot === nums.length - 1) {
                        if (!ansarr.includes(false)) {
                            ansarr.push(false);
                        }
                    } else {
                        solve(pivot + 1, newsum);
                        if (nums[pivot + 1] !== nums[pivot + 2] && pivot !== nums.length - 2) {
                            solve(pivot + 2, newsum);
                        }
                    }
                } else {
                    ansarr.push(true);
                }
            };
            
            for (let x = 0; x < nums.length; x++) {
                let s = solve(x, 0);
                if (s === true) {
                    return true;
                    break;
                }
            }
            return ansarr.includes(true);
        }
    }
};
