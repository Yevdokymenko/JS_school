// Делегування

// Фіксація через проміжок часу
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY} `;
// }

// Фіксація при зупинці активних дій
// const inputref = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputref.addEventListener('input', _.debounce(onInputChange, 2000));

// function onInputChange(event) {
//     inputCbInvocationCounter += 1;

//     outputRef.textContent = `
//     Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Показник: ${event.target.value}`;
// }

// Фільтрація
// const tech = [
//     { label: `HTML` },
//     { label: `CSS` },
//     { label: `JavaScript` },
//     { label: `Node.js` },
//     { label: `React` },
//     { label: `Vue` },
//     { label: `Next.js` },
//     { label: `Mobx` },
//     { label: `Redux` },
//     { label: `React Router` },
//     { label: `GraphQl` },
//     { label: `PostgreSQL` },
//     { label: `MongoDB` },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', onFilterChange);

// const listItemsMarkup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(event) {
//     const filter = event.target.value.toLowerCase;

//     const filtereditems = tech.filter(t => t.label.toLowerCase());
// }

// Фільтр цілі кліка
const container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(evt.target.textContent);
}

// Код додавання кнопки
// const addBtn = document.querySelector(`js-add-btn`);
// let labelCounter = 6;

// addBtn.addEventListener(`click`, onAddBtnClick);

// function onAddBtnClick() {
//     const btn = document.createElement(`button`);
//     btn.textContent = `Кнопка ${labelCounter}`;
//     btn, (type = `button`);

//     container.appendChild(btn);
//     labelCounter += 1;
// }
