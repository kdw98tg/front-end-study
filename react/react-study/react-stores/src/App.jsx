import { RecoilRoot } from "recoil";
import UserList from "./ver2/user/UserList/UserList";
import Recoil1 from "./recoil/Recoil1";
import Recoil2 from "./recoil/Recoil2";
import Recoil3 from "./recoil/Recoil3";
import UseSWR1 from "../useSWR/UseSWR1";

function App() {
  return (
    <RecoilRoot>
      {/* <UserList /> */}
      {/* <Recoil1 /> */}
      {/* <Recoil2 /> */}
      {/* <Recoil3 /> */}
      <UseSWR1 />
    </RecoilRoot>
  );
}

export default App;
