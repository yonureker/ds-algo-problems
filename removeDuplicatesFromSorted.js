// const removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length; i++){
//       if (nums[i] === nums[i-1]){
//           nums.splice(i, 1);
//           i--;
//       }
//   }
  
//   return nums.length
// };


//great solution
var removeDuplicates = function(nums) {
  nums.splice(0, nums.length, ...(new Set(nums)));
};