var singleNumber = function(nums) {

  return nums.reduce((acc,cur)=> acc^cur,0)
};

console.log(singleNumber([2,2,1]))