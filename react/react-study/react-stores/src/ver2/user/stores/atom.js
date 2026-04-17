import { atom } from "recoil";

// 검색어 필터(클라이언트 UI 상태)
// SWR이 서버 상태를 관리하므로, Recoil은 UI에서만 쓰는 상태를 담당함
// 애플리케이션 전체에서 공유되는 useState 정도로 생각하면 됨
export const userSearchAtom = atom({
  key: "userSearch",
  default: "",
});
