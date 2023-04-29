import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const invalidInput = !valueIsValid && isTouched;

    const changeInputHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const blurInputHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        enteredValue,
        valueIsValid,
        invalidInput,
        changeInputHandler,
        blurInputHandler,
        reset,
    }
}

export default useInput;