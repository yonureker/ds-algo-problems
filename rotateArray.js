const rotate = (nums, k) => {
  const sliced = nums.splice(nums.length - k)
  nums.unshift(...sliced)
  return nums;
};