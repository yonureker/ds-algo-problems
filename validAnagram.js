const isAnagram = function(s, t) {
  if (s.length != t.length) {
      return false;
  }
  
  let map = Array(256).fill(0);
  
  for (let i = 0; i < s.length;i++) {
      map[s.charCodeAt(i)]++;
      map[t.charCodeAt(i)]--;
  }
  for (let i = 0; i < 256;i++) {
      if (map[i]) {
          return false;
      }
  }
  return true;
};