import useInput from "../hooks/use-input";


const BasicForm = (props) => {
  const {
    enteredInput: enteredFirstName,
    inputIsValid : firstNameIsvalid,
    hasError : firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurhandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    enteredInput: enteredLastName,
    inputIsValid: lastNameIsvalid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurhandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    enteredInput : enteredEmail,
    inputIsValid : emailIsvalid,
    hasError : emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurhandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((email) => email.includes("@"));

  const firstNameClasses = !firstNameHasError ? "form-control" : "form-control invalid";
  const lastNameClasses = !lastNameHasError ? "form-control" : "form-control invalid";
  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";


  let formIsValid = false;
  if (firstNameIsvalid && lastNameIsvalid && emailIsvalid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(`First Name : ${enteredFirstName}`);
    console.log(`Lasr Name : ${enteredLastName}`);
    console.log(`Email : ${enteredEmail}`);

    resetFirstName();
    resetLastName();
    resetEmail();


  }




  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}

          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
