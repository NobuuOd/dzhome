let fruits = [
  { name: "яблоко", color: "красное", price: 150 },
  { name: "банан", color: "желтый", price: 120 },
  { name: "апельсин", color: "оранжевый", price: 180 },
];
function maxPrice(array) {
  let major = 0;
  let majorName = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > major) {
      major = array[i].price;
      majorName = array[i].name;
    }
  }
  return majorName;
}
// console.log(maxPrice(fruits));

// let thingsShop = [
//   { object: "обувь", name: "лоферы", size: 44 },
//   { object: "брюки", name: "чинос", size: 54 },
//   { object: "рубашка", name: "поло", size: 56 },
// ];
function objectChecks(obj) {
  if (obj.name == undefined) {
    return false;
  } else {
    return true;
  }
}
// console.log(objectChecks({name: "doora"}));

function ffun(obj, key) {
  if (obj[key] == undefined) {
    return false;
  } else {
    return true;
  }
}
// console.log(ffun({home: 0},'gol'));

function generalPrice(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].price;
  }
  return sum;
}
// console.log(generalPrice(fruits));

const users = [
  {
    id: 1,
    name: "Анна",
    age: 25,
    city: "Москва",
    isActive: true,
    salary: 80000,
  },
  {
    id: 2,
    name: "Борис",
    age: 32,
    city: "Санкт-Петербург",
    isActive: false,
    salary: 95000,
  },
  {
    id: 3,
    name: "Виктория",
    age: 28,
    city: "Москва",
    isActive: true,
    salary: 110000,
  },
  {
    id: 4,
    name: "Глеб",
    age: 35,
    city: "Казань",
    isActive: true,
    salary: 120000,
  },
  {
    id: 5,
    name: "Дарья",
    age: 22,
    city: "Москва",
    isActive: false,
    salary: 65000,
  },
  {
    id: 6,
    name: "Евгений",
    age: 29,
    city: "Санкт-Петербург",
    isActive: true,
    salary: 105000,
  },
  {
    id: 7,
    name: "Жанна",
    age: 31,
    city: "Казань",
    isActive: true,
    salary: 115000,
  },
  {
    id: 8,
    name: "Захар",
    age: 26,
    city: "Москва",
    isActive: false,
    salary: 70000,
  },
];
function usName(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Пользователь: " + [array[i].name]);
  }
}
// usName(users);

function userList(array) {
  let activeUsers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].isActive == true) {
      activeUsers.push(array[i]);
    }
  }
  return activeUsers;
}
// console.log(userList(users));

function userAge(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == "Глеб") {
      return array[i].age;
    }
  }
}
// console.log(userAge(users));

function loginUs(array) {
  let userNames = [];
  for (let i = 0; i < array.length; i++) {
    userNames.push(array[i].name);
  }
  return userNames;
}
// console.log(loginUs(users));

function moneySalary(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].salary;
  }
  return sum;
}
// console.log(moneySalary(users));

const books = [
  { title: "1984", author: "Джордж Оруэлл", year: 1949, genre: "антиутопия" },
  {
    title: "Скотный двор",
    author: "Джордж Оруэлл",
    year: 1945,
    genre: "сатира",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "роман",
  },
  {
    title: "Собачье сердце",
    author: "Михаил Булгаков",
    year: 1925,
    genre: "повесть",
  },
];
function nameBooks(array, author, year) {
  let authorName = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].author == author && array[i].year > year) {
      authorName.push(array[i]);
    }
  }
  return authorName;
}
// console.log(nameBooks(books, "Михаил Булгаков", 1947));

