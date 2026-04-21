const users = [
  { name: "Анна", age: 17 },
  { name: "Олег", age: 20 },
  { name: "Мария", age: 16 },
  { name: "Иван", age: 25 },
];
function userAge(array) {
  let adultAge = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].age >= 18) {
      adultAge.push(array[i]);
    }
  }
  return adultAge;
}
// console.log(userAge(users));

function vozrastUs(array) {
  let averageAge = 0;
  for (let i = 0; i < array.length; i++) {
    averageAge += array[i].age;
  }
  return averageAge / array.length;
}
// console.log(vozrastUs(users));

function usersBirhday(array) {
  let youngUser = users[0];
  for (let i = 0; i < array.length; i++) {
    if (users[i].age < youngUser.age) {
      youngUser = users[i];
    }
  }
  return youngUser;
}
// console.log(usersBirhday(users));






