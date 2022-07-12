// Вартість номеру в залежності від класу

// const classRoom = 'vip';
// let price;
// if (classRoom === 'econom') {
//     price = 10;
// } else if (classRoom === 'standart') {
//     price = 20;
// } else if (classRoom === 'vip') {
//     price = 50;
// } else {
//     console.log('Таких номерів не існує');
// }
// console.log(price);

// Вартість номеру по методу Switch

// const classRoom = 'vip';
// let price;
// switch (classRoom) {
//     case 'econom':
//         price = 10;
//         console.log('Ви обрали номер категорії Econom');
//         break;
//     case 'standart':
//         price = 20;
//         console.log('Ви обрали номер категорії Standart');
//         break;
//     case 'vip':
//         price = 50;
//         console.log('Ви обрали номер категорії VIP');
//         break;
//     default:
//         console.log('Таких номерів не існує');
// }
// console.log(price);

// Вартість проживання в номері в залежності від кількості осіб
// const numberOfClients = 5;
// let price;
// if (numberOfClients === 1 || numberOfClients === 2) {
//     price = 10;
// } else if (numberOfClients === 3) {
//     price = 12;
// } else if (numberOfClients === 4 || numberOfClients === 5 || numberOfClients === 6) {
//     price = 20;
// } else {
//     console.log('Стільки посилити ми не зможемо (');
// }
// console.log(price);

// Вартість проживання в номері в залежності від кількості осіб по методу switch
// const numberOfClients = 1;
// let price;
// switch (numberOfClients) {
//     case 1:
//     case 2:
//         price = 10;
//         console.log('Ви обрали проживання наодинці або в парі');
//         break;
//     case 3:
//         price = 12;
//         console.log('Ви обрали проживання у трьох');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         price = 20;
//         console.log('Ви обрали проживання великою компанією');
//         break;
//     default:
//         console.log('Стільки посилити ми не зможемо(');
// }
// console.log(price);

// Вибір способу доставки товарів
// const option = 2;
// let messege = '';

// switch (option) {
//     case 1:
//         messege = 'Ви можете забрати своє замовлення завтра з 12:00 в офісі в Києві';
//         break;
//     case 2:
//         messege = 'Наш персонал дос тавить Ваше замовлення з 9:00 до 18:00';
//         break;
//     case 3:
//         messege = 'Посилка вже сьогодні буде відправлена по Вашій адресі';
//         break;
//     default:
//         console.log('Наш менеджер зателефонує Вам для уточнення замолення');
// }
// console.log(messege);

// Цикл for
// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// console.log('qwerty');

// Сума заарплатні співробітників. Зарплатня випадкова від 500 до 5000.
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП працівника номер ${i} - ${salary} `);
//     totalSalary += salary;
// }
// console.log(`totalSalary: `, totalSalary);

// Підрахунок суми всіх четних чисел
// const min = 6;
// const max = 20;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     // console.log(i);

//     if (i % 2 === 0) {
//         console.log(`четное: `, i);

//         total += i;
//     }
// }
// console.log(`total: `, total);

// Попередній приклад з логікою від зворотнього
// const min = 2;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(`Не Четное: `, i);
//         continue;
//     }

//     console.log(`Четное: `, i);
//     total += i;
// }
// console.log(`total: `, total);

// Обробка замовлення в магазині
// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Загальна вартість замовлень ${payment} кредитів. Перевіряємо кількість кредитів на рахунку`
// );

// if (balance >= payment) {
//     console.log(`ok`);

//     balance -= payment;
//     console.log(`На рахунку залишилось ${balance} кредитів`);
// else { console.log(`wow`); }
// }

// Партнерська програма
// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Бронзовий партнер, знижка 2%`);
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`Срібний партнер, знижка 5%`);
//     discount = 0.05;
// } else {
//     console.log(`Золотий партнер, знижка 10%`);
//     discount = 0.1;
// } else { console.log(`Не партнер, знижка 0%`); }

// console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100} %`);

// totalSpent += payment;

// console.log(`Загальна сума витраченого в магазині: ${totalSpent}`);
