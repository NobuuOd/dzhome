// function isShort(str) {
//   if (str.length < 4) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isShort('jhgh'));

function shortArray(massive) {
  let newMassive = [];
  for (let i = 0; i < massive.length; i++) {
    if (isShort(massive[i])) {
      newMassive.push(massive[i]);
    }
  }
  return newMassive;
}
// console.log(shortArray(["окно", "кнопка", "программа", "лук"]));
// console.log(shortArray(["три", "кнопка", "мир", "лук"]));

function wordsArray(massive) {
  let longWords = 0;
  let shortWords = 0;
  for (let i = 0; i < massive.length; i++) {
    if (isShort(massive[i])) {
      shortWords = shortWords + 1;
    } else {
      longWords = longWords + 1;
    }
  }
 return shortWords > longWords;
}
// console.log(wordsArray(['ключ', 'помидор', 'кот', 'снег']));
// console.log(wordsArray(['луга', 'вор', 'сок', 'мор']));



function isShort(str) {
 return str.length < 4;
}
// console.log(isShort('jhgd'));

array = [[1, 2, 45, 16, 17], ['луга', 'вор', 'сок', 'мор']]
// console.log(array[0][1]);