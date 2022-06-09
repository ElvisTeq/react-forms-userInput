import { useState } from "react";

const useMyHook = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const hasValue = validateValue(enteredValue);
  const hasError = !hasValue && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const clear = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    hasValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    clear,
  };
};

export default useMyHook;
