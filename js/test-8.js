//  ДОДАТКОВЕ ЗАНЯТТЯ

// Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true
// const obj = {
//     name: 'Jhon',
//     car: 'Audi',
//     carColor: 'White',
// };

// function findKey(key) {
//     // const Keys = Object.keys(obj);
//     // console.log(Keys);
//     // for (const evt of Keys) {
//     //     if (key === evt) {
//     //         return true;
//     //     }
//     // }
//     // return false;

// // ДРУГИЙ СПОСІБ
//     return key in obj;

// }

// console.log(findKey(`name`));

// ДОРОБИТИ!!!!Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// function checkObject(value) {
//     if (typeof value === null) {
//         console.log(null);
//         return null;
//     } else if (value === Array.isArray(value)) {
//         console.log('array');
//     } else {
//         console.log('object');
//     }
// }

// checkObject({ a: 1 });
// checkObject([2]);
// checkObject(null);

// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// };
// //
// // multiplyNumeric(menu);

// // після виклику функції
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === `number`) {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// const totalSalary = obj => {
//     let total = 0;

//     for (let value of Object.values(obj)) {
//         total += value;
//     }
//     console.log(total);
// };
// totalSalary(salaries);

//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 6 },
//     { name: 'Sapphire', price: 400, quantity: 7 },
//     { name: 'Rubble', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//     let sum = 0;

//     stones.forEach(element => {
//         const { name, price, quantity } = element;
//         if (name === stonesName) {
//             sum = price * quantity;
//         }
//     });
//     return sum;
// }

// console.log(calcTotalPrice(stones, `Diamond`));

// Напишіть код JS, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 56);
// //
// // console.log(arr); //[23, 4, 78, 5, 63, 45, 210]\

// function deleteElement([...newArr], deleteValue) {
//     for (let i = 0; i <= arr.length; i += 1) {
//         if (newArr[i] === deleteValue) {
//             newArr.splice(i, 1);
//         }
//     }
//     return newArr;
// }
// console.log(deleteElement(arr, 56));
// console.log(arr);

// ВИРІШИТИ!!!!!
// // Напиши скрипт управління особистим кабінетом інтернет банку
// //Є об'єкт account у якому необхідно реалізувати
// //методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
//   const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

//   const account = {
//     //поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [],

//     //Метод створює та повертає об'єкт транзакцій
//     //Приймає суму та тип транзакцій
//     createTransaction(type, amount) {
//       return {
//         type,
//         amount,
//       };
//     },

//     //Метод відповідає за додавання суми до балансу.
//     //Приймає суму транкціонації.
//     //Викликає createTransaction для створення об'єкта транзакції
//     //після чого додає їх у історію транзакцій
//     deposit(amount) {},

//     //Метод відповідає за зняття суми з балансу.
//     //Приймає суму транкціонації.
//     //Викликає createTransaction для створення об'єкта транзакції
//     //після чого додає їх у історію транзакцій
//     //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//     //що недостатньо коштів на рахунку
//     withdraw(amount) {},

//     //Метод повертає поточний баланс
//     getBalance() {},

//     //Метод шукає та повертає об'єкт транзакції по id
//     getTransactionDetails(id) {},

//     //Метод повертає кількість засобів певного типу
//     //транзакції з історії транзакцій
//     getTransactionType(type) {},
//   };
