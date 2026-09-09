/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    len = nums.length-1;
    k = 0
     for (let i=0;i<=len;i++){
       console.log(nums[i])
        if (nums[i]!=val ){
              nums[k]=nums[i]
              k++
          }
     }

    return k
    
};
// @lc code=end

