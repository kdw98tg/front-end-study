import React, { useCallback, useEffect, useState } from "react";
function UseCallback1() {
  //함수를 새로 생성하는게 아니라, 메모리에서 가져와서 다시 사용함
  //렌더링시, 최적화 기법

  const [number, setNumber] = useState(0);
  //   const someFunction = () => {
  //     console.log(`some function : number =  ${number}`);
  //     return;
  //   };

  //js에서 함수도 객체로인식
  //참조값이 바뀌어서 값이 변경된것으로 인식
  //   useEffect(() => {
  //     console.log("someFunction이 변경되었습니다.");
  //   }, [someFunction]);

  //근데 dependency array에 있는 값이 없으면, 렌더링이 될 때마다, 처음 함수가 실행이 됨
  //그래서 dependecny array에서 값을 감시하다가 특정 값이 바뀌면 그때, 함수를 새로 만들어서 캐싱해줘야 함
  const someFunction = useCallback(() => {
    console.log(`some function : number =  ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button onClick={someFunction}>someFunction</button>
    </div>
  );
}
export default UseCallback1;
