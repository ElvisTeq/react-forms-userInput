import useMyHook from "../hooks/use-myHook";

const BasicForm = (props) => {
  const {
    enteredValue: enteredName,
    hasValue: nameHasValue,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clear: clearName,
  } = useMyHook((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameHasValue) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // DO nothing if "!form"
    if (!formIsValid) {
      return;
    }

    console.log(enteredName);

    clearName();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p className="error-text">Please enter a name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
