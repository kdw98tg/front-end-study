import { useEffect, useState } from "react";
function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("이름과 숫자를 입력해 주세요.");
  }, []);

  useEffect(() => {
    console.log("이름이 변경되었습니다.");
  }, [name]);

  useEffect(() => {
    console.log("숫자가 변경되었습니다.");
  }, [count]);

  return (
    <div>
      <h1>이름</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>숫자</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </div>
  );
}

export default UseEffect1;
