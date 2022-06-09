import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  // True/False => determine if the user has done/touched anything before toggling "messages & classNames"
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Only true => if (input.value in form)

  const enteredNameIsValid = enteredName.trim() !== "";

  // true (default) => show invalid
  // false => valid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // useState => Will log/store every key input "onChange"
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // onBlur => function
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredName(""); // Reset Input Value on submit
    setEnteredNameTouched(false); // Reset Touched on submit
  };

  // true/false => toggle "className"
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
