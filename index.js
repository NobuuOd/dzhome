const users = [
  { firstName: "Иван", lastName: "Петров", birthYear: 1990 },
  { firstName: "Мария", lastName: "Иванова", birthYear: 2010 },
  { firstName: "Алексей", lastName: "Сидоров", birthYear: 2005 },
];
function stroki(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].birthYear < 2007) {
      newArray.push(array[i].firstName + " " + array[i].lastName);
    }
  }
  return newArray;
}
// console.log(stroki(users));
const cart = [
  { id: 1, name: "Книга", price: 500, quantity: 1 },
  { id: 2, name: "Ручка", price: 50, quantity: 2 },
  { id: 1, name: "Книга", price: 500, quantity: 1 },
  { id: 3, name: "Блокнот", price: 120, quantity: 1 },
  { id: 2, name: "Ручка", price: 50, quantity: 3 },
];
function urna(array) {
  let sum = {};
  for (let i = 0; i < array.length; i++) {
    if (sum[array[i].name] == undefined) {
      sum[array[i].name] = array[i].price * array[i].quantity;
    } else {
      sum[array[i].name] += array[i].price * array[i].quantity;
    }
  }
  return sum;
}
// console.log(urna(cart));
