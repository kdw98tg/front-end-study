import { selector } from "recoil";
import userListAtom from "./userListAtom";

//유저의 원본을 바로 반환하는거는 selector로 감싸는것에 대한 의미가 약해진다.
//유저의 리스트를 받아서 필터링이나 정렬을 하는 등의 작업이 필요할 때 selector로 감싸는것이 의미가 있다.
export const userListSelector = selector({
  key: "userListState",
  get: ({ get }) => {
    const userList = get(userListAtom);
    return userList;
  },
});
