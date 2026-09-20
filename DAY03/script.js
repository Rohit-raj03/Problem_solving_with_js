// //🎯 Day 3 – Loops & Patterns
// 🧩 Core Concept Focus
// Nested Loops
// Pattern Printing with Logic and Symmetry
// Understanding iteration depth for shapes and designs

// 🧠 Questions List

// 1 Print Right-Angled Star Triangle

function rightAngleStare(row) {
  if (row <= 0) return "number upto 1";
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

rightAngleStare(5);
rightAngleStare(10);
console.log("2 Print Inverted Right-Angled Triangle");
// 2 Print Inverted Right-Angled Triangle

function invertedRightAngleStare(row) {
  if (row <= 0) return "number upto 1";
  for (let i = row; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

invertedRightAngleStare(5);
invertedRightAngleStare(12);

console.log("Print Pyramid Pattern");
// 3 Print Pyramid Pattern
function pyramidPattern(row) {
  if (row <= 0) return "number upto 1";
  for (let i = 1; i <= row; i++) {
    let str = "";

    //space
    for (let j = 1; j <= row - i; j++) {
      str += " ";
    }
    //stare
    for (let k = 1; k <= i * 2 - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}
pyramidPattern(5);

// 4 Print Inverted Pyramid Pattern

function invertedPyamind(row) {
  for (let i = row; i >= 1; i--) {
    let str = "";

    //space
    for (let j = row - i; j > 0; j--) {
      str += " ";
    }
    //start
    for (let j = i * 2 - 1; j >= 1; j--) {
      str += "*";
      // console.log(j);
    }
    console.log(str);
  }
}

invertedPyamind(5);
