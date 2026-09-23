// Questions List
// Split Number into Digits

function splitDigits(n) {
  let arr = [];

  while (n > 0) {
    let digit = n % 10;
    arr.push(digit);

    n = Math.floor(n / 10);
  }

  return arr.reverse();
}

console.log(splitDigits(12345));
