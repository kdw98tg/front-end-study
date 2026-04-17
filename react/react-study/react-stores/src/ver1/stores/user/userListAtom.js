import { atom } from "recoil";

export const userListAtom = atom({
  key: "userList",
  default: [],
});

export const userLoadingAtom = atom({
  key: "userLoadingAtom",
  default: false,
});

export const userErrorAtom = atom({
  key: "userErrorAtom",
  default: null,
});