import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  RecoilRoot,
} from "recoil";
import { userState, userInfoSelector } from "./store"; // 위에서 만든 파일

function Recoil2() {
  const userInfo = useRecoilValue(userInfoSelector);
  console.log("[Recoil2] 렌더링 됨");
  console.log(userInfo);

return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>🔵 대시보드 (읽기 전용)</h3>
      <p>요약: {userInfo}</p>
    </div>
  );
}
export default Recoil2;
