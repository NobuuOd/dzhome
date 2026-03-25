function prosChisla(a) {
  let bypass = 1;
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  if (a == bypass) {
    return false;
  }
  return true;
}
// console.log(prosChisla(1));

function increasing(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(increasing([1, 2, -3, -4]));

function everyFive(array) {
  let newMassive = [];
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % 5 != 0) {
      newMassive.push(array[i]);
    }
  }
  return newMassive;
}
// console.log(everyFive([1, 2, 3, 4, 5, 6]));
// console.log(everyFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(everyFive(["dsa", "ads1", "dud", "asdw", "frfrf", "tyuik"]));

function summaArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function arrayMatrix(array) {
  let sum = 0;
  for (let j = 0; j < array.length; j++) {
    sum += summaArray(array[j]);
  }
  return sum;
}
// console.log(
//   arrayMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
// console.log(isAdult(18));

function ageArray(array) {
  let newAgeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isAdult(array[i])) {
      newAgeArray.push(array[i]);
    }
  }
  return newAgeArray;
}
// console.log(ageArray([19, 15, 6, 18, 24]));
// console.log(ageArray([7, 33, 8, 17, 9]));

function rangeAge(array) {
  let adultArray = 0;
  let minorArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (isAdult(array[i])) {
      adultArray = adultArray + 1;
    } else {
      minorArray = minorArray + 1;
    }
  }
  if (adultArray > minorArray) {
    return true;
  } else {
    return false;
  }
}
// console.log(rangeAge([18, 14, 20, 6]));
// console.log(rangeAge([18, 19, 20, 6]));
