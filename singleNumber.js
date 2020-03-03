var singleNumber = function(nums) {
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
  return nums.reduce((acc,cur)=> acc^cur,0)
};

console.log(singleNumber([2,2,1]))