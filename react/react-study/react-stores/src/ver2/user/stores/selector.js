import { selector } from "recoil";
import { userSearchAtom } from "./atom";

//SWR 데이터를 직접 참조할 수는 없음
// selector 는 클라이언트 상태 기반 파생값만 처리함

// atom 의 값을 기반으로 계산된 새로운 값을 반환하는 순수 함수임
// useMemo의 전역 버전이라고 이해하면 됨
// atom 값이 변하지 않으면 selector도 재계산하지 않고 캐싱된 값을 사용함

// useSetRecoilState (변경 함수만 필요할 때)  핵심 최적화
// 상태를 변경만 하고, 값을 화면에 그리지 않는 컴포넌트에서 씁니다.
// 이 Hook을 쓰면 전역 상태가 바뀌어도 이 컴포넌트는 리렌더링되지 않습니다. (이게 엄청난 성능 최적화 포인트입니다.)

export const userSearchSelector = selector({
  key: "userSearchSelector",
  get: ({ get }) => {
    const search = get(userSearchAtom);
    return search.trim().toLowerCase();
  },
});
