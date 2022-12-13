import {useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const inputRef = useRef();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const fromSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");

    // console.log(inputRef.current.value);
    // inputRef.current.value=""; Never do this : not ideal scripting
  }

  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={inputRef}
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
