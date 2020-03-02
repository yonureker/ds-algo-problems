const merge = function(intervals) {
   if (intervals.length === 0){
      return [];
   } else if (intervals.length === 1){
      return intervals;
   }

   intervals.sort((a,b) => {
      if (a[0] === b[0]){
         return a[1] - b[1]
      }

      return a[0] - b[0]
   })

   let res = [intervals.shift()] // [[1,4]] [4,1]
   let last = res[0];

   while (intervals.length > 0){
      let cur = intervals.shift(); // [4,5]
      if (cur[0] > last[1]){
         last = cur;
         res.push(cur);
         continue;
      }
      
      last[1] = Math.max(last[1], cur[1]);
   }

   return res;
}

console.log(merge([[1,4], [0,4]]))