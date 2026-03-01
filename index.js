function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEven(4));
// console.log(isEven(3));

function evenArray(massive) {
  let newMassive = [];
  for (let i = 0; i < massive.length; i++) {
    if (isEven(massive[i])) {
      newMassive.push(massive[i]);
    }
  }
  return newMassive;
}
// console.log(evenArray([14, 3, 6, 7]));
// console.log(evenArray([12, 6, 17, 23]));

function oddArray(massive) {
  let countChet = 0;
  let countNechet = 0;
  for (let i = 0; i < massive.length; i++) {
    if (isEven(massive[i])) {
      countChet = countChet + 1;
    } else {
      countNechet = countNechet + 1;
    }
  }
  if (countChet > countNechet) {
    return true;
  } else {
    return false;
  }
}
// console.log(oddArray([13, 12, 6, 8]));
// // console.log(oddArray([3, 12, 5, 8]));

function numberArray(massive) {
  let countNum = 0;
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] % 2 == 0) {
      countNum = countNum + 1;
    }
  }
  return countNum;
}
// console.log(numberArray([4, 6, 10, 16]));
// console.log(numberArray([4, 6, 10, 16, 18, 20]));
