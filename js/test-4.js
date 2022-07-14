// ФУНЦІЇ

// ТЕОРІЯ
// const add = function (a, b) {
//     console.log(a);
//     console.log(b);
//     const result = a + b;
//     // console(`a + b: `, result);
//     // ...
//     console.log(`Виконується функція add`);
//     return result;
// };

// const r1 = add(5, 3);
// console.log(`r1: `, r1);

// const r2 = add(10, 15);
// console.log(`r2: `, r2);

// const r3 = add(30, 50);
// console.log(`r3: `, r3);

// Калькуляція товарів
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log(`Total: `, total);

// const calculateTotalPrice = function (items) {
//     console.log(`items всередині функції: `, items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// Функція для перебору та логування масиву
// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems([`Mango`, `Kivi`, `Poly`, `Ajax`]);
// logItems([1, 2, 3, 4, 5]);
// logItems([`клава`, `навушнии`, `годинник`]);

// Сккрипт для пошуку ллогіна
// const logins = [`majnf`, `;kjfhdv`, `ytrhb`, `ytbfdd`];

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Користувач ${loginToFind} знайдений.`;
//         }
//     }
//     return `Користувач ${loginToFind} не знайдений.`;
// };

// console.log(findLogin(logins, `majnf`));
// console.log(findLogin(logins, `;kjfhdv`));
// console.log(findLogin(logins, `ytrhb`));
// console.log(findLogin(logins, `ytbfdd`));

// Пошук найменшего числа
// const findSmallesNumber = function (numbers) {
//     let smallesNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }
//     return smallesNumber;
// };

// console.log(findSmallesNumber([3, 8, 6, 33, 536, -1]));
// console.log(findSmallesNumber([100, 44, 77, 245, 35, 2, 4]));
// console.log(findSmallesNumber([5, 78, 3524, 357, 57, 6]));

// Зміна регистру в строці
// const changeCase = function (string) {
//     const letters = string.split(``);
//     let invertedString = ``;

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log(changeCase(`sjhkfnHUYBnl`));
// console.log(changeCase(`YGbbck`));
// console.log(changeCase(`TTVcncl,JJ`));

// Слаг джля сайту
// const slugify = function (string) {
//     return string.toLowerCase().split(` `).join(`-`);
// };

// console.log(slugify(`To 10 dunkks`));
// console.log(slugify(`Best of the Best`));
// console.log(slugify(`NbA top plays`));

//Функція відфільтрувати числа
// const filterNumbers = function (array, ...args) {
//     console.log(`array: `.array);
//     console.log(`args: `, args);

//     for (const element of array) {
//         if (args.includes(element)) {
//             console.log(`${element} є всюди!`);
//         }
//     }
// };

// console.log(filterNumbers([1, 2, 3, 4, 5, 6], 10, 44, 5, 34, 22));
// console.log(filterNumbers([5, 4, 5, 6, 77, 8], 55, 67, 5, 8, 99));
// console.log(filterNumbers([100, 22, 33, 4444, 55], 5, 6, 7, 100, 8, 9, 22));

// Створюємо printClient НЕ ЖДОРОБИВ
// function printContactsInfo(names = `, phone = `) {
//     const arrayOfNames = names.split(`,`);
//     const arrayOfPhones = phones.split(`,`);
//     console.log(`arrayOfNames`, arrayOfNames);
//     console.log(`arrayOfPhones`, arrayOfPhones);

//     const noPhone = `no-phone`;

//     for (let i = 0; i < arrayOfNames.length; i += 1) {
//         const aName = arrayOfNames[i];
//         const aPhone = arrayOfPhones[i];

//         console.log(`name: ${aName}; phone: ${aPhone ? aPhone : noPhone}`);
//     }
// }

// printContactsInfo(`Jacob,Williams,Solomon,Nicolas`, `0665560001, 0113344556, 005555775, 0005555`);

// Площа прямокутника (НЕ ДОРОБИВ)
//  *
//  * @param { string } sizes
//     *
//  * @returns {number}
//  */
// function getRectangleArea(sizes) {
//     const arrayOfSizes = sizes.split(` `);
//     console.log(`arrrayOfSizes`, arrayOfSizes);
//     const lastElementIndex = arrayOfSizes.lenght - 1;
//     console.log(`lasElementIndex`, lastElementIndex);
//     return arrayOfSizes[0] * arrayOfSizes[lastElementIndex];
// }

// const area = getRectangleArea(`8 11`);

// console.log(`Rect area is ${area}`);

// Найменше з чисел
// function min(a, b) {
//     return Math.min(a, b);
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Пошук найблільшого елементу (НЕ ВИЙШЛО)
function findLargesNumber(numbers = []) {
    return Math.max(...numbers);
}

console.log(findLargesNumbers([2, 17, 94, 22, 44, 5]));
console.log(findLargesNumber([7, 44, 55, 22, 345, 5777, 8]));

//
