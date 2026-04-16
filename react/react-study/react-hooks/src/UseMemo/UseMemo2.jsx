import { useEffect, useMemo, useState } from "react";

function UseMemo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //const location = isKorea ? "한국" : "외국";
  //객체타입으로 바꾸고, number를 바꿔보니까 useEffect 호출이 뜸 왜지?
  //원시타입은 값비교가 일어나고, 컴포넌트가 리랜더링 되면, 객체 주소가 달라지기 때문에
  //location의 객체 주소가 달라지니까 location 의 참조가 달라진거니까 useEffect가 호출됨
  //그래서 useMemo를 사용해서 객체를 캐싱해놔야함

    // const location = {
    //   country: isKorea ? "한국" : "외국",
    // };

  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);


  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default UseMemo2;
