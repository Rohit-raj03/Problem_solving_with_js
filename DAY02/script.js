// 🎯 Day 2 – Conditions & Logic

// 🧩 Core Concept Focus
// Conditional statements (if, else if, else)
// Comparison and logical operators
// Decision making based on different inputs
// Strengthening flow-of-control understanding

// 🧠 Questions List

// 1 Find the Maximum of Three Numbers
let a = 10;
let b = 17;
let c = 5;

let max = a;

if (a > b && a > c) {
  max;
} else if (b > a && b > c) {
  max = b;
} else {
  max = c;
}
console.log(max);

// 2 Check if a Number is Positive, Negative, or Zero
let num = 0;
if (num < 0) {
  console.log("number is negative ");
} else if (num > 0) {
  console.log("number is positive ");
} else {
  console.log("number is zero");
}

// 3 Calculate Electricity Bill

function calculateElectricityBill(units) {
  let total;
  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  return total;
}
console.log(calculateElectricityBill(300));

//4 Check if a Character is a Vowel or Consonant

function chekVowel(char) {
  char = char.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return "Vowel";
  }
  return "Consonant";
}

console.log(chekVowel("e"));
console.log(chekVowel("K"));
console.log(chekVowel("u"));
console.log(chekVowel("Z"));

// 5 Check if a Year is a Leap Year
function checkLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  }
  return "Not a Leap Year";
}

