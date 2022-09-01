const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);
const inputLengthEl = Number(inputEl.dataset.length);
// const validInputEl = document.querySelector('style');
// console.log(validInputEl);

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === inputLengthEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');

    }   
}
);