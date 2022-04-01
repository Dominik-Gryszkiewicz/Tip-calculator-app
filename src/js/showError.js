import {peopleInput, errorInfo, tipAmount, total} from './variables.js'

export const showError = () => {
    if (peopleInput.value === "0" || peopleInput.value === "") {
        peopleInput.classList.add('error-outline')
        errorInfo.classList.add('error-info')
        if (peopleInput.value === "0") {
            tipAmount.textContent = "0.00"
            total.textContent = "0.00"
        }
    }
}