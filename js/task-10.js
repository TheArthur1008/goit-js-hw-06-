function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector('#controls button[data-create');
// console.log(btnCreateEl);
const btnDestroyEl = document.querySelector('#controls button[data-destroy');
// console.log(btnDestroyEl);
const inputEl = document.querySelector('#controls input')
// console.log(inputEl);
const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);
const controlsEl = document.querySelector('#controls');
// console.log(controlsEl);


btnCreateEl.addEventListener('click', onBtnCreateEl);
btnDestroyEl.addEventListener('click', onBtnDestroyEl);

function onBtnDestroyEl() {
	boxesEl.innerHTML = '';
	inputEl.value = '';
}

function onBtnCreateEl() {
    createBoxes(Number(inputEl.value));
}

function createBoxes(amount) {
  let markup = ``;

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }
  
  boxesEl.insertAdjacentHTML('afterbegin', markup);

  const arr = [...boxesEl.children];
  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
};


