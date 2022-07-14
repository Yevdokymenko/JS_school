// Масиви

// const friends = [`Mango`, `Kivi`];
// console.log(friends);
// console.table(friends);
// console.log([1]);

// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += `-1`;
// }

// console.table(friends);

// Порахувати загальну суму покупки
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total = total + cart[i];
// }

// console.log(`Total: `, total);

// Підраховує суму всіх чьотних чисел
// const numbers = [1, 5, 7, 9, 12, 4, 15, 27, 30, 18];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log(`Четное!!!`);

//         total += number;
//     }
// }

// console.log(`Total: `, total);

// Логіка від зворотнього попереднього прикладу
// const numbers = [1, 5, 7, 9, 12, 4, 15, 27, 30, 18];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log(`Дану етирацію необхідно пропустити`, number);
//         continue;
//     }
//     console.log(`${number} - Четное!!!`);
//     total += number;
// }
// console.log(`Total:`, total);

// Вхід користувача по логіну
// const logins = [`fkjskf`, `s;kfjnvksnf`, `fiu`, `epiurnv`];
// const loginToFind = `fiu`;
// let message = ``;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log = logins[i];
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдений`;
//         break;
//     }
//     message = `Корситувач ${loginToFind} не знайдений`;
// }

// console.log(message);

// Пощук найменшего числа
// const numbers = [51, 12, 104, 2, 44, 598, 575];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);
//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }
// console.log(`smallesNumber: `, smallesNumber);

// Сортування по алфавіту
// const langs = [`jklhjk`, `kjhgjh`, `rd`, `uyguyv`];
// let isSorted;

// do {
//     console.log(`-------- next iteration WHILE`);
//     isSorted = true;

//     for (let i = 0; i < langs.length - 1; i++) {
//         console.log(langs);

//         const current = langs[i];
//         const next = langs[i + 1];
//         console.log(`comparing ${current} and ${next}`);
//         if (current > next) {
//             console.log(`swapping!`);
//             const temp = current;

//             langs[i] = next;
//             langs[i + 1] = temp;
//             isSorted = false;
//         }
//     }
// } while (!isSorted);
// console.log(langs);

//Обʼєднати весь масив в одну строку
// const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
// let string = ``;
// for (const friend of friends) {
//     string += friend + `,`;
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// Теж саме методом джоінт
// const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];

// const string = friends.join(` `);
// console.log(string);

// Заміна регістру на протилежний
// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(`invertedString: `, invertedString);

// Робимо Слаг лінку сайту
// const title = `Top 10 benefits`;

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(` `);
// console.log(words);

// const slug = words.join(`-`);
// console.log(slug);

// Розраахунок суми двох масивів
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 20];
// let total = 0;

// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// Работа з карточками Трелло
// const cards = [`Карточка-1`, `Карточка-2`, `Карточка-3`, `Карточка-4`, `Карточка-5`];
// console.table(cards);

// const cardToRemove = `Карточка-1`;
// const index = cards.indexOf(cardToRemove);
// console.log(cards.splice(index, 1));
// console.table(cards);
// console.log(index);

// const cardToInsert = `Карточка-6`;
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// const cardToUpdate = `Карточка-4`;
// cards.splice(1, 1, 8599595);
// console.table(cards);
