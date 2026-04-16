import { atom } from "recoil";

//유저 목록을 저장할 atom
export const userState = atom({
  key: "userState", // 고유한 key값
  default: [], // 초기값은 빈 배열
});

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});
