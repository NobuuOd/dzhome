// function writeEven() {
//    for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//    }
// }
// writeEven() // 0 2 4 6 ... 16 18 20

// // function countNegative(array) {
// //   let minus = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] < 0) {
// //      minus++;
// //     }
// //   }
// //   console.log(minus);
// }
// countNegative([-1, 2, -3, 4]) // 2
// countNegative([1, 2, -3, 4]) // 1

// function makeNegative(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       array[i] = array[i] * -1;
//     }
//   }
//   console.log(array);
// }
// makeNegative([1, -2, 3, -4]); // [-1, -2, -3, -4]
// makeNegative([10, -10, 4, 11, -6, 0]); // [-10, -10, -4, -11, -6, 0]

// function selectBySum(array1, array2) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < array1.length; i++) {
//     sum1 += array1[i];
//   }
//   for (let i = 0; i < array2.length; i++) {
//     sum2 += array2[i];
//   }
//   if (sum1 > sum2) {
//     console.log(array1);
//   } else {
//     console.log(array2);
//   }
// }
// selectBySum([1, 2, 3], [4, 5]); // [4, 5] (сумма 6 > 9)
// selectBySum([10, 20], [5, 5, 5]); // [10, 20] (сумма 30 > 15)
