function plus(number) {
  if (number < 0) {
    return number * -1;
  } else {
    return number;
  }
}
// console.log(plus(-5));

function convertMassive(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = plus(array[i]);
  }
  return array;
}
// console.log(convertMassive([1, 14, -15, -3]));

function compareArrays(array1, array2) {
  let sum1 = summaMassive(array1);
  let sum2 = summaMassive(array2);
  if (sum1 > sum2) {
    return array1;
  } else {
    return array2;
  }
}
console.log(compareArrays([2, 6, -13, -6], [6, -18, 15, -14]));

function summaMassive(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += plus(array[i]);
  }
  return sum;
}
// console.log(summaMassive([2, 18, -15, 12]));
