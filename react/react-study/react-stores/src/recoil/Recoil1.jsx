import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  RecoilRoot,
} from "recoil";
import { userState, userInfoSelector } from "./store"; // 위에서 만든 파일

function Recoil1() {
  const [user, setUser] = useRecoilState(userState);
  console.log("[Recoil1] 렌더링 됨");
  console.log(user);

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <h3>🔴 프로필 (읽기+쓰기)</h3>
      <p>이름: {user.name}</p>
      <button onClick={() => setUser({ ...user, name: "김동우" })}>
        이름 변경
      </button>
    </div>
  );
}

export default Recoil1;
