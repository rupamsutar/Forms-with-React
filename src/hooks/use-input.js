import { useState } from "react";

const useInput = (validateInput) => {
    const [enteredInput, setEnteredInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validateInput(enteredInput);
    const hasError = !inputIsValid && isTouched;

    const inputChangeHandler = (event) => {setEnteredInput(event.target.value)};
    const inputBlurhandler = (event) => {setIsTouched(true)};
    const reset = () => {
        setEnteredInput("");
        setIsTouched(false);
    }

    return {
        enteredInput,
        inputIsValid,
        hasError,
        inputChangeHandler,
        inputBlurhandler,
        reset
    }
};

export default useInput;