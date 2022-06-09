import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  // True/False => determine if the user has done/touched anything before toggling "messages & classNames"
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Only true => if (input.value in form)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");

  // true (default) => show invalid
  // false => valid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // True/False => will hide submit button
  let formIsValid = false;

  // Validating form to toggle submit button
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // Name Input
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // Email Input
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // onBlur => function
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredName(""); // Reset Input Value on submit
    setEnteredNameTouched(false); // Reset Touched on submit
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // true/false => toggle "className"
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
