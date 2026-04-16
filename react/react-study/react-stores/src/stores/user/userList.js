import { selector } from "recoil";
import userListAtom from "./atom";

const userListState = selector({
  key: "userListState",
  get: ({ get }) => {
    const userList = get(userListAtom);
    return userList;
  },
});
