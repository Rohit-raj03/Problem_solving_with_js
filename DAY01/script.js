// 1 Print Numbers from 1 to N

let num = 5;

for (let i = 1; i <= num; i++) {
  console.log(i);
}

// 2 Print Numbers from N to 1 without changing the loop condition of above question
const num1 = 5;

for (let i = 1; i <= num1; i++) {
  console.log(num1 - i + 1);
}

// 3 Print All Even Numbers from 1 to N
// Input: 10
// Output: 2 4 6 8 10
// ✨ Introduces conditional checks inside loops.

let n1 = 10;

for (let i = 0; i <= n1; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  4 Sum of First N Natural Numbers

// Input: 5
// Output: 15
// ✨ Encourages cumulative addition and variable usage.

let n2 = 5;
let sum = 0;
for (let i = 0; i <= n2; i++) {
  sum += i;
}
console.log(sum);

// 5 Product (Factorial) of N

// Input: 5
// Output: 120
// ✨ Reinforces loop control with multiplication logic.

let n3 = 5;
let f = 1;
for (let i = 1; i <= n3; i++) {
  f *= i;
}
console.log(f);

// 6 Sum of All Even Numbers up to N

// Input: 10
// Output: 30 (2+4+6+8+10)
// ✨ Combines loops + condition + accumulation.

let n4 = 10;
let res = 0;
for (let i = 0; i <= n4; i++) {
  if (i % 2 === 0) {
    res += i;
  }
}
console.log(res);

// 7 Print Squares of Numbers from 1 to N

// Input: 5
// Output: 1 4 9 16 25
// ✨ Introduces arithmetic pattern generation.

let n5 = 5;
for (let i = 1; i <= n5; i++) {
  console.log(i * i);
}

// 🏠 Homework / Practice Challenge
// Print all numbers divisible by 3 and 5 up to N

// Input: 30
// Output: 15 30
// ✨ Reinforces conditional checks inside loops.

let n6 = 30;
for (let i = 1; i <= n6; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Find the sum of all odd numbers up to N

// Input: 10
// Output: 25 (1 + 3 + 5 + 7 + 9)
// ✨ Combines looping with conditional accumulation.

let n7 = 10;

for (let i = 1; i <= n7; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Print the cubes of numbers from 1 to N

// Input: 5
// Output: 1 8 27 64 125
// ✨ Extends arithmetic pattern logic beyond squares.

let n8 = 5;
for (let i = 1; i <= n8; i++) {
  console.log(i * i * i);
}

// Print only the numbers that are both even and perfect squares
// Input: 1 to 20
// Output: 4 16
// ✨ Encourages combining two conditions within one loop.

let n9 = 20;
for (let i = 1; i * i <= n9; i++) {
  if ((i * i) % 2 === 0) {
    console.log(i * i);
  }
}
