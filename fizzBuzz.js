const fizzBuzz = (n) => {
  const fizzArray = []
  const fizzBuzzMap = { 3: 'Fizz', 5: 'Buzz'}
  
  for (let i = 1; i <= n; i++){
      let myStr = "";
      for (const key in fizzBuzzMap){
          if (i % key === 0){
              myStr += fizzBuzzMap[key]
          }
      }
      if (!myStr){
          myStr += i;
      }
      fizzArray.push(myStr)
  }
  return fizzArray;
}