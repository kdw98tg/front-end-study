import useSWR from "swr";
import axios from "axios";

//1. Fetcher 함수 : SWR에게 "데이터는 이렇게 가져와야해"라고 알려주는 룰임
// 여기에 axios를 사용한 api를 넣으면 될듯
// 뭐가 바뀌고 할 때, SWR이 fetcher를 실행해서 데이터를 가져오나보다
const fetcher = (url) => axios.get(url).then((res) => res.data);

function UseSWR1() {
  //2. useSWR 사용 (라이브러리가 만들어둔 훅인듯)
  // 첫 번째 인자 : 고유한 키값 (캐싱과 재검증을 위해 필요)
  // 두 번째 인자 : fetcher 함수

  //mutate : SWR이 관리하는 데이터를 강제로 업데이트할 때 사용하는 함수
  const { data, error, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher,
  );
  console.log('화면 리렌더링 됨');  

  // 로딩과 에러 처리가 단 2줄로 끝납니다. (useState 여러 개 쓸 필요 없음!)
  if (error) return <div>❌ 데이터를 불러오는데 실패했습니다.</div>;
  if (isLoading) return <div>⏳ 데이터를 가져오는 중...</div>;

  return (
    <div style={{ border: "2px solid #4CAF50", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h3>👤 유저 정보 (SWR 캐싱 완료)</h3>
      <p><strong>이름:</strong> {data.name}</p>
      <p><strong>이메일:</strong> {data.email}</p>
      <p><strong>회사:</strong> {data.company.name}</p>
      
      {/* mutate()를 호출하면 해당 캐시 키의 데이터를 백그라운드에서 다시 가져옵니다 */}
      {/* 기존 데이터와 새로 가져온 데이터를 비교해서 변한게 없으면, 리렌더링 안함 */}
      <button onClick={() => mutate()} style={{ cursor: "pointer" }}>
        🔄 수동으로 최신 데이터 갱신하기
      </button>
    </div>
  );
}
export default UseSWR1;
