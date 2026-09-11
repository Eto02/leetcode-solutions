/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    len = nums.length
    k=0
    for(let i=0; i<len;i++){  
         if( nums[k-2]!=nums[i]){
            nums[k]=nums[i]
        k++ 
        }
      }
  return k
};
// @lc code=end

