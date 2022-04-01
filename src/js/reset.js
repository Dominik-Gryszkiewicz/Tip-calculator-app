import {billInput, tipInputs, tipInputCustom, peopleInput, tipAmount, total, errorInfo, errorTip, resetButton} from './variables.js'

export default function reset(){
    if (this.classList.contains('reset')) {
        billInput.value = '';
        tipInputCustom.value = '';
        peopleInput.value = '';
        errorInfo.classList.remove('error-info');
        peopleInput.classList.remove('error-outline');
        errorTip.classList.remove('calculator__tip__error--active');
        tipInputs.forEach(input => input.classList.remove('active'));
        tipAmount.textContent = '0.00';
        total.textContent = '0.00';
        resetButton.classList.remove('reset');
    }
}