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

// // Пошук найблільшого елементу (НЕ ВИЙШЛО)
// function findLargesNumber(numbers = []) {
//     return Math.max(...numbers);
// }

// console.log(findLargesNumbers([2, 17, 94, 22, 44, 5]));
// console.log(findLargesNumber([7, 44, 55, 22, 345, 5777, 8]));

//Вивести середнє значення
// function getAverage() {
//     console.log(`lenght`, arguments.lenght);
//     const arrayOfValues = Array.from(arguments);
//     console.log(`arrayOfValues`, arrayOfValues);

//     let total = 0;
//     for (const number of arrayOfValues) {
//         total += number;
//     }
//     return total / arrayOfValues.length;
// }

// console.log(getAverage(1, 2, 3, 4, 5, 6));
// console.log(getAverage(33, 4, 5, 66, 7753, 5));
// console.log(getAverage(848484, 455, 6667, 8995, 2));

//  Обчислення індесу маси тіла
// function convertStringToNumber(str = ``) {
//     return str.replace(`,`, `.`);
// }
// function calcBMI(weight = ``, height = ``) {
//     const validParam1 = convertStringToNumber(weight);
//     const validParam2 = convertStringToNumber(height);
//     console.log(validParam1, validParam2);

//     const result = validParam1 / Math.pow(validParam2, 2);

//     return result;
// }

// const bmi = calcBMI(`88.3`, `1.75`);
// console.log(`bmi`, bmi);

// задача
// Використовуючи if...else,
// Перевірте, чи є число непарним або парним
// const number = 7;
// const number = 7;
// if (!number % 2 !== 0) {
//     console.log(`непаарне`, number);
// } else {
//     console.log(`парне`, number);
// }

// // Використовуючи конструкцію if..else, напишіть код, який отримує число через prompt, а потім виводить в alert:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.
// Передбачається, що користувач вводить лише цифри.
// (ДОРОБИТИ)
// const number = prompt(`Введіть число`);
// if (number > 0) {
//     alert(1);
// } else if (number === 0) {
//     alert(0);
// } else {
//     alert(-1);
// }

// Використовуючи if...else,
// Перевірте, чи є змінна числом чи ні
// const someValue = 555;
// if (typeof someValue === `number`) {
//     console.log(`Its number!`);
// } else {
//     console.log(`Its not number!`);
// }

// console.log(typeof someValue);

// //Напишіть цикл, який виводить у консоль
// 1. числа від max до min за спаданням
// 2. числа від max до min за зростанням
// 3. Виведіть у консоль усіх парні числа від min до max
// 4. Виведіть у консоль усіх непарні числа від min до max
// const max = 99;
// const min = 33;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log(`Парні `, i);
//     } else {
//         console.log(`Не парні `, i);
//      }
// }

// Напишіть код, щоб знайти ступінь числа за допомогою циклу for
// console.log(Math.pow(2, 3));
// console.log(2 ** 3);

// const number = 2;
// const numberPow = 0;
// let result = 1;
// for (let i = 1; i <= numberPow; i += 1) {
//     result *= number;
// }
// console.log(result);

//За допомогою циклу for додайте всі парні числа від min до max
// const max = 75;
// const min = 0;
// let result = 0;
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     result += i;
// }
// console.log(result);

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.
// (ДОРОБИТИ!!!!)
// let result = 0;
// while (true) {
//     let customerNumber = prompt('Дай число, братан!');
//     if (customerNumber !== `number` || customerNumber === null) {
//         break;
//     } else {
//         result += Number(customerNumber);
//     }
// }

// console.log(result);

//
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// const maxNumber = 100;
// do {
//     let userNumber = Number(prompt('Передай число братан!'));
//     if (userNumber > 100) {
//         break;
//     }
// } while (true);

////
//
// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const lang = `JS`;
// let res = ``;
// switch (lang) {
//     case `JS`:
//         res = `JS Брендан Уйх`;
//         break;

//     case `PHP`:
//         res = `PHP Расмус Лердорф`;
//         break;

//     case `C#`:
//         res = `C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота`;
//         break;

//     case `Java`:
//         res = `Java Джеймс Гослінг`;
//         break;

//     case `Python`:
//         res = `Python Гвідо ван Россум`;
//         break;
//     default:
//         res = `Error!`;
// }
// console.log(res);

// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// let taxes = 0;
// let fullSalary = 10000;
// let pureSalary = 0;

// for (let i = 0; i < 6; i += 1) {
//     taxes += fullSalary * 0.05;
//     pureSalary += fullSalary;
//     console.log(fullSalary);
// }

// console.log(`taxes`, taxes);
// console.log(`pureSalary`, pureSalary - taxes);
