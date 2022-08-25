// КЛЮЧОВЕ СЛОВО this

//ПРОТОТИПНЕ НАСЛІДУВАННЯ

// objA {
//     x: 1,
//         __proto__:
// }

// objB {
//     y: 2,
//         __proto__:
// }

// objC {
//     z: 3,
//         __proto__:
// }

// const objC = {
//     z: 5,
// };

// console.log('objC ', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB ', objB);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA ', objA);

// ДОДАТКОВЕ ЗАНЯТТЯ

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає функцію зворотного виклику
//greet(name) - колбек, який приймає ім'я і виводить в консоль
//рядок "Привіт <name>"
//Реалізуй перевірку, чи name не пустий рядок

// function letMeSeeYourName(callback) {
//     const name = prompt('Введіть ваше імя');
//     if (name.trim().length === 0) {
//         alert('Введіть!');
//         window.location.reload();
//     } else {
//         callback(name);
//     }
// }

// function greet(name) {
//     console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

// // Напишіть дві функції
// // letMeSeeYourName(callback) - запитує ім'я користувача
// //через prompt і викликає функцію зворотного виклику
// //greet(name) - колбек, який приймає ім'я і виводить в консоль
// //рядок "Привіт <name>"
// //Реалізуй перевірку, чи name не пустий рядок

// function letMeSeeYourName(callback) {
//   let name = prompt("Enter your name");
//   // console.log(name.length);
//   if (name.trim().length === 0) {
//     alert("Введіть ваше ім'я");
//     window.location.reload();
//   } else {
//     callback(name);
//   }
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

// // Виконай рефакторинг makeDish так, щоб не потрібно було
// // щоразу передавати ім'я шефа.
// // Напишіть функцію makeShef(shefName), яка повертає функцію
// // makeDish(dish), що пам'ятає ім'я шефа при її виклику

// // const makeDish = function (shefName, dish) {
// //   console.log(`${shefName} is cooking ${dish}`);
// // };

// // makeDish("Mango", "apple pie");
// // makeDish("Poly", "muffins");
// const makeShef = function (shefName) {
//   // console.log(`${shefName}`);

//   function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }
//   makeDish("apple pie");
//   makeDish("muffins");
// };
// const mainShef = makeShef("Mango");
// // mainShef("apple pie");

// const makeSecondDish = makeShef("Poly");
// // makeSecondDish("muffins");
// // console.log("result: ", result);
// // console.log('makeDish("Mango"): ', makeShef("Mango"));

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price);
//     },
// };
// product.showPrice();

// const anotherProduct = {
//     price: 7000,
// };

// anotherProduct.showPrice = product.showPrice;
// anotherProduct.showPrice();

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
// function each(array, callback) {
//     const mewArray = [];
//     array.forEach(item => {
//         newArray.push(this);
//     }, 1);
//     return newArray;
// }
// const array = [1, 2, 3];
// const multiply = item => item * 2;

// console.log(each(array, multiply));

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка рахує та виводить в консоль кількість своїх викликів
// const makeCounter() {
//             let counter = 0;
//     return function () {
//         return counter += 1;
//     }
// }

// const countCalls = makeCounter();
// const countCalls2 = makeCounter(
// console.log(countCalls());
// countCalls();

//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// const PASSWORD = 'qwerty';
// function savePassword(password) {
//     return function (newPassword) {
//         return password === newPassword;
//     };
// }
// const checkPassword = savePassword(PASSWORD);
// console.log(checkPassword('12345'));

//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function saveDiscount(discount) {
//     return function (price) {
//         return price - price * discount;
//     };
// }
// const calcDiscount = saveDiscount(0.1);
// console.log(calcDiscount(3000));

// Підрахувати кількість голосних у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.

// function countVowel(str) {
// }
//

// const arrayVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
// function countVowel(str) {
//     const lowerStr = str.toLowerCase();
//     let count = 0;
//     let vowels = [];
//     lowerStr.split('').forEach(item => {
//         if (arrayVowels.includes(item)) {
//             count += 1;
//             vowels.push(item);
//         }
//     });
//     console.log(vowels);
//     return count;
// }
// console.log(countVowel('Hello')); //2
// console.log(countVowel('Umbrella')); //3

// // Напишіть дві функції
// // letMeSeeYourName(callback) - запитує ім'я користувача
// //через prompt і викликає функцію зворотного виклику
// //greet(name) - колбек, який приймає ім'я і виводить в консоль
// //рядок "Привіт <name>"
// //Реалізуй перевірку, чи name не пустий рядок

// function letMeSeeYourName(callback) {
//   let name = prompt("Enter your name");
//   // console.log(name.length);
//   if (name.trim().length === 0) {
//     alert("Введіть ваше ім'я");
//     window.location.reload();
//   } else {
//     callback(name);
//   }
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);
