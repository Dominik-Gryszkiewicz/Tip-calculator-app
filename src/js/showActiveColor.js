import {tipInputs, tipInputCustom, resetButton, errorTip} from './variables.js'

export function showActiveColor() {
    if (this === tipInputCustom) {
        for (const input of tipInputs) {
            input.classList.remove('active');
        }
    } else {
        for (const input of tipInputs) {
            input.classList.remove('active');
        }
    
        this.classList.add('active');
    
        if (this.classList.contains('active')) {
            tipInputCustom.value = '';
            resetButton.classList.add('reset');
            errorTip.classList.remove('calculator__tip__error--active');
        }
    } 
}