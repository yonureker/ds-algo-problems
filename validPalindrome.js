const isPalindrome = (s) => {
  let strippedString = s.replace(/\W/g, '');
  let reversedString = strippedString.split('').reverse().join('');
  
  return strippedString.toLowerCase() == reversedString.toLowerCase();
};