// function chislo() {
// return 4;
// }
// console.log(chislo());

function productOfNumbers(a, b) {
  const work = a * b;
  return work;
}
// console.log(productOfNumbers(12, 5));

function work(a, b) {
  const sum = productOfNumbers(a, b);
  if (sum % 2 == 0) {
    return sum;
  } else {
    return 0;
  }
}
// console.log(work(2, 8));
// console.log(work(3, 3));

function examination(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return true;
    }
  }
  return false;
}
console.log(examination([2, 4, -10, 5]));
console.log(examination([2, 4, 7, 5]));
