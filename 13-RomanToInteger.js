/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;

  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  for (let i = 0; i < s.length; i++){
    switch (s[i]) {
      case "I":
        if (s[i + 1] === 'V' ||  s[i + 1] === 'X'){
          result -= 1;
        } else {
          result += 1
        }
        break;
      case "X":
        if (s[i + 1] === 'L' ||  s[i + 1] === 'C'){
          result -= 10;
        } else {
          result += 10
        }
        break;
      case "C":
        if (s[i + 1] === 'D' ||  s[i + 1] === 'M'){
          result -= 100;
        } else {
          result += 100
        }
        break;
      default:
        result += romanToInt[s[i]]
        break;
    }
  }

  return result;
};

