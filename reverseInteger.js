const reverse = x => {
  let reversed;

  if (x > 0) {
    reversed = String(x)
      .split("")
      .reverse()
      .join("");
  } else {
    reversed =
      String(-x)
        .split("")
        .reverse()
        .join("") * -1;
  }

  if (reversed < Math.pow(-2,31) || reversed > Math.pow(2,31) - 1) {
    return 0;
  } else {
    return reversed
  }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-120));
