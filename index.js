// function splitEvenOdd(massive) {
//   let chetMassive = [];
//   let nechetMassive = [];
//   for (let i = 0; i < massive.length; i++) {
//     if (massive[i] % 2 == 0) {
//         chetMassive.push(massive[i]);
//     } else {
//         nechetMassive.push(massive[i]);
//     }
//   }
//   console.log(chetMassive, nechetMassive);
// }
// splitEvenOdd([1, 2, 3, 4, 5, 6]); // [2, 4, 6], [1, 3, 5]

// function isPalindrome(massive) {
//   for (let i = 0; i < massive.length; i++) {

//   }
// }
// isPalindrome([1, 2, 3, 2, 1]); // true
// isPalindrome([1, 2, 3]); // false

// let n = 0;
// function writeToNumber(n) {
//   for (let i = 0; i <= n; i++) {
//      console.log(i);
//   }
// }
// writeToNumber(5) // 0 1 2 3 4 5
// writeToNumber(3) // 0 1 2 3

// function formatTime(time) {
//   const hour = Math.floor(time / 60);
//   const min = time % 60;
//   if (min < 10) {
//     console.log(`${hour}:0${min}`);
//   } else {
//     console.log(`${hour}:${min}`);
//   }
// }
// formatTime(90); // "1:30"
// formatTime(125); // "2:05"

// function findMultiples(array) {
//   chisloarray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 == 0 && array[i] % 5 == 0) {
//       chisloarray.push(array[i]);
//     }
//   }
//   console.log(chisloarray);
// }
// findMultiples([1, 3, 5, 15, 30, 45, 7]); // [15, 30, 45]

// function reverse(araay) {
//   let massive = [];
//   for (let i = araay.length - 1; i >= 0; i--) {
//     massive.push(araay[i]);
//   }
//   console.log(massive);
// }
// reverse([1, 2, 3, 4]); // [4, 3, 2, 1]
// reverse([1, 2, 3]); // [3, 2, 1]

function reverse(araay) {
  araay.reverse();
  console.log(araay);
}
reverse([1, 2, 3, 4]); // [4, 3, 2, 1]
reverse([1, 2, 3]); // [3, 2, 1]
