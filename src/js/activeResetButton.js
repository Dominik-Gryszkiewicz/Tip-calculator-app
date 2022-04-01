import {tipInputCustom, peopleInput, billInput, resetButton, errorTip} from './variables.js'

export default function activeResetButton(){
    if (this === tipInputCustom) {
        if (this.value !== '') {
            resetButton.classList.add('reset');
            errorTip.classList.remove('calculator__tip__error--active');
        }
        if ((billInput.value === 0 || billInput.value === '') && (peopleInput.value === 0 || peopleInput.value === '') && tipInputCustom.value === '') {
            resetButton.classList.remove('reset');
        }
    } else {
        if (this.value !== 0 || this.value !== '') {
            resetButton.classList.add('reset');
        }
        if ((billInput.value === 0 || billInput.value === '') && (peopleInput.value === 0 || peopleInput.value === '') && (tipInputCustom.value === '') && (document.querySelector('.active') === null)) {
            resetButton.classList.remove('reset');
        }
    } 
}
