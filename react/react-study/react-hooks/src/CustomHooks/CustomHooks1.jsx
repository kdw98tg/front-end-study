import { useInput } from "./hook/useInput";

function displayMessage(message) {
  alert(message);
}

function CustomHooks1() {
  //이것들을 여러곳에서 사용할 수 있는데, 매번 useState, onChange, value 이런식으로 만들어야 하는데,
  //커스텀 훅을 만들어서, 재사용할 수 있게 만들 수 있음
  //   const [inputValue, setInputValue] = useState("");

  //   const handleChange = (e) => {
  //     setInputValue(e.target.value);
  //   };

  const [inputValue, handleChange, handleSubmit] = useInput(
    "",
    displayMessage
  );

  //   const handleSubmit = () => {
  //     alert(inputValue);
  //     // setInputValue("");
  //   };

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default CustomHooks1;
