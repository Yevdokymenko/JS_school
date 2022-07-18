// ОБʼЄКТИ

// Створюємо плей-ліст
// const playlist = {
//     name: `Мій плейліст`,
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
// };

// playlist.band = `rap`;

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);
// const keys = Object.keys(playlist);
// console.log(keys);

// Колекції або масиви обʼєктів
const friends = [
    { name: `Mango`, online: false },
    { name: `Kiwi`, online: true },
    { name: `Poly`, online: true },
    { name: `Ajax`, online: false },
];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

console.table(friends);

const findFriendByName = function (allFriends, name) {
    for (const friend of friends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name === name) {
            return `ЗНАЙШЛИ!`;
        }
    }

    return `НЕ ЗНАЙШЛИ :(`;
};

console.log(findFriendByName(friends, `Poly`));
console.log(findFriendByName(friends, `Chelsy`));
