import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    enteredInput : enteredName,
    inputIsValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurhandler: nameInputBlurHandler,
    reset: nameReset

  } = useInput((event) => event.trim() !== "");

  const {
    enteredInput: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurhandler: emailInputBlurHandler,
    reset: emailReset
  } = useInput((email) => email.includes("@"));

  
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  };


  const fromSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail);
    console.log(enteredName);
    emailReset();
    nameReset();
  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Email</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          />
          {emailInputIsInvalid && <p className="error-text"> include @ in your email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
