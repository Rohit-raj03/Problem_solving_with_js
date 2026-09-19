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

//🏠 Homework / Practice Challenge

// Check if a Character is Uppercase, Lowercase, Digit, or Special Character

let char = "Z";
function checkCharacter(char) {
  let charCode = char.charCodeAt();
  console.log(charCode);
  if (charCode >= 65 && charCode <= 90) return "Uppercase";
  else if (charCode >= 97 && charCode <= 122) return "Lowercase";
  else if (charCode >= 48 && charCode <= 57) return "Digit";

  return "Specail Character";
}
console.log(checkCharacter("@"));

//2 Check Triangle Type Using Sides and Angles;

function checkTriangle(a, b, c) {
  if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    return "Right Angled";
  } else if (a === b && b === c) {
    return "Equilaterl";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  }
  return "Scalene";
}

console.log(checkTriangle(3, 4, 5));

// 3 Calculate Income Tax Based on Slabs
function taxClaculate(income) {
  let tax;
  if (income <= 250000) return 0;
  else if (income <= 500000) {
    return (tax = ((income - 250000) * 5) / 100);
  } else if (income < 1000000) {
    return (tax = (250000 * 5) / 100 + ((income - 500000) * 20) / 100);
  } else {
    return (tax =
      (500000 * 5) / 100 +
      (1000000 * 20) / 100 +
      income -
      (1000000 * 30) / 100);
  }
}
console.log(taxClaculate(750000));
