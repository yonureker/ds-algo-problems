var findDuplicate = function(nums) {
  let sorted = nums.sort()

  for (let i = 0; i < sorted.length; i++){
    if (sorted[i] === sorted[i+1]){
      return sorted[i]
    }
  }
};

findDuplicate([1,3,4,2,2])

