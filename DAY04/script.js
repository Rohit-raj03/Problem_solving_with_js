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

// Count Whole and Fractional Digits Separately

// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// ✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.

function countDigits(n) {
  let num = n < 0 ? -n : n;

  let fraction = num % 1;
  let whole = num - fraction;

  // Count digits before the decimal point
  let wholeCount = 0;
  let tempWhole = whole;

  if (tempWhole === 0) {
    wholeCount = 1;
  } else {
    while (tempWhole > 0) {
      tempWhole = (tempWhole - (tempWhole % 10)) / 10;
      wholeCount++;
    }
  }

  // Count digits after the decimal point
  let fractionCount = 0;
  let tempFraction = fraction;
  const EPSILON = 1e-9;

  while (tempFraction > EPSILON) {
    tempFraction = (tempFraction * 10) % 1;
    fractionCount++;
  }

  return { wholeCount, fractionCount };
}

console.log(countDigits(12.345));
// { wholeCount: 2, fractionCount: 3 }