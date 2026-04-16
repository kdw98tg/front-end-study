import { useState, useMemo } from "react";
//Memo 의 뜻은 Memoization 이라는 뜻임
//10을 리턴하는 함수를 계속 리턴한다면
//다시 만들어서 쓰지 않고 메모리에 저장해서 사용
//캐싱해서 캐시에서 꺼내서 사용한다는 뜻

//함수형 컴포넌트가 렌더링 된다는 것은 함수가 다시 호출된다는 말임
//함수가 다시 호출되면 초기화됨

//useMemo를 사용해서 메모이제이션을 하고나면
//useMemo는 처음 계산된 결과를 메로리에 저장함
//컴포넌트가 반복적으로 랜더링 되어도 계속 반복 호출하지 않고
//메모리에서 꺼내와서 그 값을 재사용하게 됨

//useMemo는 콜백함수, 배열을 받음
//콜백함수는 함수를 사용해서 나온 값을 리턴하여 저장함
//두번째 값은 dependency array 인데
//배열안에 있는 값이 바뀔때만 다시 메모이제이션 함

//useMemo 많이쓰면 캐싱된 데이터가 많아지면서 메모리 공간이 없어짐
const hardCalculate = (number) => {
  console.time("hard");
  for (let i = 0; i < 1000000000; i++) {}
  console.timeEnd("hard");
  return number + 10000;
};

const easyCalculate = (number) => {
  console.time("easy");
  console.timeEnd("easy");
  return number + 1;
};

function UseMemo1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  //브라우저의 숫자를 바꾸면, useState로 등록된 hardNumber의 숫자가 바뀌게 됨
  //그러면 화면이 리랜더링 되면서, hardCalculate 함수가 다시 실행되게 됨.
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  //hardSum은 값을 캐싱할때 쓰는듯?

  //easyCalculate 를 만들고, easyCalculate의 값을 올리면, hardCalculate도 다시계산됨
  //함수형 컴포넌트라서 그럼
  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);
  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
}

export default UseMemo1;
