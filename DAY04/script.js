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


//N = 12.34
//Decimal ke baad 2 digits hain.
//Isliye number ko 100 se multiply karo:

let N = 12.34;

let result = N * 100;

console.log(result); // 1234