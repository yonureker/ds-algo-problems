/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (nums == null || nums.length === 0 || k < 1 || k > nums.length){
      return -1;
  }
  return partition(nums, 0, nums.length - 1, k);
};

var partition = function(nums, start, end, k) {
  if(start >= end) {
      return nums[k - 1];
  }
  let left = start;
  let right = end;
  let mid = left + Math.floor((right - left) / 2);
  let pivot = nums[mid];
  while(left <= right) {
      while(left <= right && nums[left] > pivot) {
          left ++;
      }
      
      while(left <= right && nums[right] < pivot) {
          right --;
      }
      
      if(left <= right) {
          swap(nums, left, right);
          left ++;
          right --;
      }
  }
  
  if (k - 1 <= right) {
      return partition(nums, start, right, k);
  } else {
      return partition(nums, left, end, k);
  }
  return nums[k - 1];
}

var swap = function(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}