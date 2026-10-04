// Questions List
//1 Split Number into Digits

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


//2 N = 12.34
//Decimal ke baad 2 digits hain.
//Isliye number ko 100 se multiply karo:

let N1 = 12.34;

let result = N1 * 100;

console.log(result); // 1234

// 3 Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.

let N2 = 5.75;

let whole = N2 | 0;
let fraction = N2 - whole;

console.log("Whole =", whole);
console.log("Fraction =", fraction);