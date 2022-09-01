const fontSizeEl = document.querySelector('#font-size-control');
// console.log(fontSizeEl);
const textEl = document.querySelector('#text');
// console.log(textEl);

fontSizeEl.addEventListener('input',
    event => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});

