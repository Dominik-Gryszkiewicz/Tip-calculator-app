import {tipInputs, tipInputCustom, peopleInput, billInput, resetButton} from './js/variables.js'
import activeResetButton from './js/activeResetButton.js'
import {showResult} from './js/showResult.js'
import {showActiveColor} from './js/showActiveColor.js'
import {showError} from './js/showError.js'
import reset from './js/reset.js'


billInput.addEventListener('input', activeResetButton);
billInput.addEventListener('input', showResult);
tipInputs.forEach( input => input.addEventListener('click', showActiveColor));
tipInputs.forEach( input => input.addEventListener('click', showResult));
tipInputCustom.addEventListener('click', showActiveColor);
tipInputCustom.addEventListener('input', activeResetButton);
tipInputCustom.addEventListener('input', showResult);
tipInputCustom.addEventListener('focus', activeResetButton);
peopleInput.addEventListener('input', activeResetButton);
peopleInput.addEventListener('input', showResult);
peopleInput.addEventListener('input', showError);
resetButton.addEventListener('click', reset)


