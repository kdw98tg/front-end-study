import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  RecoilRoot,
} from "recoil";
import { userState, userInfoSelector, userLevelSelector } from "./store"; // 위에서 만든 파일
import { useEffect } from "react";

function Recoil3() {
  //값 변경만 필요함
  const setUser = useSetRecoilState(userState);

  //selector 지우면, 리렌더링 안됨
  //확인차
  const userLevel = useRecoilValue(userLevelSelector);
  useEffect(() => {
    console.log("중간 점검 : user의 레벨은? : ", userLevel);
  }, [userLevel]);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>🟢 컨트롤러 (쓰기 전용)</h3>
      {/* user 값을 직접 읽지 않고 함수 형태로 이전 상태를 가져와서 업데이트 */}
      <button
        onClick={() => setUser((prev) => ({ ...prev, level: prev.level + 1 }))}
      >
        레벨업! (렌더링 안 됨)
      </button>
    </div>
  );
}
export default Recoil3;
