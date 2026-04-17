import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: { name: "게스트", level: 1 },
});

// 2. Selector: Atom을 기반으로 계산된 파생 데이터 (useMemo 전역 버전)
export const userInfoSelector = selector({
  key: "userInfoSelector",
  get: ({ get }) => {
    const user = get(userState); // userState를 구독
    return `${user.name}님은 현재 레벨 ${user.level}입니다.`;
  },
});

export const userLevelSelector = selector({
  key: "userLevelSelector",
  get: ({ get }) => {
    const user = get(userState);
    return user.level;
  }
});