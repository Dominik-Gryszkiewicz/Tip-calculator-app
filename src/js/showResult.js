import {tipAmount, total, peopleInput, errorInfo, tipInputCustom, errorTip, errorBill, billInput} from './variables.js'

export const showResult = () => {
    let billInputValue = document.querySelector('.calculator__bill__input').value;
    let peopleNumber = document.querySelector('.calculator__people__input').value;
    
    let tipValue = document.querySelector('.active') === null ? 
    tipInputCustom.value : 
    document.querySelector('.active').dataset.value;

    if (tipValue !== "" && tipValue < 10) {
        tipValue = `0${tipValue}`
    } else if (tipValue > 100) {
        tipValue = "100"
        tipInputCustom.value = tipValue
        errorTip.classList.add('calculator__tip__error--active')
    }


    if (peopleNumber !== '' && peopleNumber !== 0) {
        if (tipValue === '100') {
            if (billInputValue.length < 6) {
                tipAmount.textContent = (billInputValue / peopleNumber).toFixed(2);
                total.textContent = ((billInputValue  / peopleNumber) + (billInputValue / peopleNumber)).toFixed(2);
            }
        } else {
            if (peopleNumber === "0") {
                tipAmount.textContent = "0.00"
                total.textContent = "0.00"
                return
            } else {
                if (billInputValue.length < 6) {
                    tipAmount.textContent = ((billInputValue * `0.${tipValue}`) / peopleNumber).toFixed(2);
                    total.textContent = (((billInputValue * `0.${tipValue}`) / peopleNumber) + (billInputValue / peopleNumber)).toFixed(2);
                    billInput.classList.remove('error-outline')
                    errorBill.classList.remove('show')
                } else {
                    billInput.classList.add('error-outline')
                    errorBill.classList.add('show')
                }
            }
        }
        peopleInput.classList.remove('error-outline')
        errorInfo.classList.remove('error-info')
    }
}