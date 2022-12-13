import { useReducer } from "react";

const initialState = {
    value: "",
    isTouched: false
}

const inputReducer = (state, action) => {
    if (action.type === "INPUT") {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if (action.type === "BLUR") {
        return {
            value: state.value,
            isTouched: true,
        }
    }
    if (action.type === "RESET") {
        return initialState;
    }
}

const useInput = (validateInput) => {

    const [inputState, dispatchInput] = useReducer(inputReducer, initialState)

    const inputIsValid = validateInput(inputState.value);
    const hasError = !inputIsValid && inputState.isTouched;

    const inputChangeHandler = (event) => {
        dispatchInput({type: "INPUT", value: event.target.value});
    };
    const inputBlurhandler = (event) => {
        dispatchInput({type: "BLUR"})
    };

    const reset = () => {
        dispatchInput({type: "RESET"})
    }

    return {
        enteredInput: inputState.value,
        inputIsValid,
        hasError,
        inputChangeHandler,
        inputBlurhandler,
        reset
    }
};

export default useInput;