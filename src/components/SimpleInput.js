import {useState, useRef, useEffect} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const inputRef = useRef();

  useEffect(() => {
    if(enteredNameIsValid) {
      console.log("Name input is valid");
    }
  }, [enteredNameIsValid]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

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

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

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
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
