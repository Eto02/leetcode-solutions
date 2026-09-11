/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
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
      if(nums[k]!==nums[i+1]){
        nums[k+1]=nums[i+1]
        k++
      }
        
    }
  return k
};
// @lc code=end

