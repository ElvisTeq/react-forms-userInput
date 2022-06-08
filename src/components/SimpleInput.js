import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // True/False => toggle err message and "classNames"
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); // useState(null) => To skip "useState from below"
  // True/False => determine if the user has done/touched anything before toggling "messages & classNames"
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Only true => if (input.value in form)

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name input is Valid!");
    }
  }, [enteredNameIsValid]);

  // useState => Will log/store every key input "onChange"
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    // useState
    console.log(enteredName);

    // useRef
    const enteredValue = nameInputRef.current.value; // Get current input value with ref "onSubmit"
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  // true (default) => show invalid
  // false => valid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // true/false => toggle "className"
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
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
