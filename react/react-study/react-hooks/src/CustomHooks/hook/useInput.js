import { useState } from "react";
export function useInput(initalValue, submitAction ) {
  const [inputValue, setInputValue] = useState(initalValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
      submitAction(inputValue);
    setInputValue("");
  };

  return [inputValue, handleChange, handleSubmit];
}
