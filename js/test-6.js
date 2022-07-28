// Заняття 6. Обʼєкти
// Розпилення
// const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[77, 8, 9], 9000];
// console.log(numbers);

// Пошук найменшої та найбільшої температури
// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));

// Сшивання декількох масивів через concat() & spread
// const lastWeekTemps = [1, 2, 3];
// const currentTemp = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemp, ...nextWeekTemps];
// console.log(allTemps);

// Розпилення обʼєктів
// const a = { x: 1, y: 2, g: { hello: `world` } };
// const b = { x: 0, z: 3 };

// const c = { ...a, ...b };
// console.log(c);

// Деструктуризація обʼєкта
// const playlist = {
//     name: `Мій плейліст`,
//     rating: 5,
//     tracks: [`Song-1`, `Song-2`, `Song-3`],
//     trackCount: 3,
//     author: `Mango`,
// };

// const { rating, tracks, name, trackCount, author = 555 } = playlist;

// console.log(playlist);

// Поглиблена деструктуризація
// const profile = {
//     name: `Jacques Gluke`,
//     tag: `jgluke`,
//     location: `Ocho Rios, Jamaica`,
//     avatar: `picture`,
//     stats: {
//         followers: 5603,
//         views: 48277,
//         likes: 1309,
//     },
// };

// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
// } = profile;
// console.log(name, tag, location, avatar, followers, views, likes);

// Деструктуризаація масивів
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// // console.log(red, green, blue);

// const authors = {
//     kiwi: 4,
//     poly: 3,
//     ajax: 10,
//     mango: 7,
// };

// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }

// Операція rest (збір)
// const profile = {
//     name: `Jacques Gluke`,
//     tag: `jgluke`,
//     location: `Ocho Rios, Jamaica`,
//     avatar: `picture`,
//     stats: {
//         followers: 5603,
//         views: 48277,
//         likes: 1309,
//     },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);

// Патерн обʼєкт налаштувань
// const showProfileInfo = function (userProfile) {
//     console.log(userProfile);
// };

// const profile = {
//     name: `Jacques Gluke`,
//     tag: `jgluke`,
//     location: `Ocho Rios, Jamaica`,
//     avatar: `picture`,
//     stats: {
//         followers: 5603,
//         views: 48277,
//         likes: 1309,
//     },
// };

// showProfileInfo(profile);

// const fn = function (a, b, c, d, e, f) {};

// fn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
// });

// Колекція товарів в кошику
const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            console.log(item);

            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];

            if (productName === name) {
                console.log(`Знайшли такий продукт `, productName);
                console.log(`індекс: `, i);

                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.item = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;
        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: `apple`, price: 50 });
cart.add({ name: `lemon`, price: 60 });
cart.add({ name: `lemon`, price: 60 });
cart.add({ name: `lemon`, price: 60 });
cart.add({ name: `peach`, price: 60 });
cart.add({ name: `coconut`, price: 110 });
cart.add({ name: `coconut`, price: 110 });
cart.add({ name: `coconut`, price: 110 });

console.table(cart.getItems());

cart.remove(`lemon`);
console.table(cart.getItems());
console.log(`Total: `, cart.countTotalPrice());
