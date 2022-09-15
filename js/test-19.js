// HTTP-запити

// const r = fetch('тут адреса сайта апі');
// console.log(r);

// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//     cardContainer: document.querySelector('.js-card-container'),
//     searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const searchQuery = form.elements.query.value;

//     fetchPokemon(searchQuery)
//         .then(renderPokemonCard)
//         .catch(onFetchError)
//         .finally(() => form.reset());
// }

// function fetchPokemon(pokemonId) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//     return fetch(url).then(response => response.json());
// }

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpl(pokemon);
//     refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//     alert(`Упс, нема такого покемона`);
// }

// fetch('http://api.weatherstack.com/current?access_key=addb9340d3bd931230aeb471899ebea6&query=Kiev')
//     .then(r => r.json())
//     .then(console.log);

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//     fetchUsers()
//         .then(users => renderUserList(users))
//         .catch(error => console.log(error));
// });

// function fetchUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

// function renderUserList(users) {
//     const markup = users
//         .map(user => {
//             return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//         })
//         .join('');
//     userList.innerHTML = markup;
}
