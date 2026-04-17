import useSWR from "swr";
import { useRecoilValue, useRecoilState } from "recoil";
import { getUsers } from "../api/getUser";
import { userSearchAtom } from "../stores/atom";
import { userSearchSelector } from "../stores/selector";

//SWR fetcher: getUser는 이미 data만 반환하므로, 그대로 사용함
const fetchUsers = () => getUsers();

export const useUser = () => {
  //swr: 서버 상태 관리(로딩, 에러, 캐싱, 자동 revalidation 등을 담당함)
  const {
    data: users = [],
    error,
    isLoading,
    mutate,
  } = useSWR("/users", fetchUsers, {
    // 포커스 시 자동 재검증 비활성화, 
    // (블로그글, 공지사항 처럼 자주 바뀌지 않을 데이터에 false 사용, api 비용이 들어가는 로직일 때)
    revalidateOnFocus: false, 
    // 50초 동안 동일한 요청은 deduping 처리 
    // (똑같은 요청이 여러번 들어오면 , 2초 안에는 무조건 요청을 한번만 받게됨, 그 시간을 50초로 늘려서 성능 최적화 (50초 안에는 바뀌지 않을 데이터일때 사용할듯))
    dedupingInterval: 50000, 
  });

  //Recoil: 클라이언트 상태 (검색 필터)
  const [search, setSearch] = useRecoilState(userSearchAtom);
  const normalizedSearch = useRecoilValue(userSearchSelector);

  console.log();

  //검색어로 필터링 (SWR 데이터 + Recoil 상태 조합)
  const filteredUsers = normalizedSearch
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(normalizedSearch) ||
          user.email.toLowerCase().includes(normalizedSearch),
      )
    : users;

  return {
    users: filteredUsers, // 필터링된 유저 목록
    totalCount: users.length, // 전체 유저 수
    isLoading, // SWR이 관리하는 로딩 상태
    error, // SWR이 관리하는 에러 상태
    search, // 현재 검색어
    setSearch, // 검색어 변경 함수
    refetch: () => mutate(), // 수동 새로고침
  };
};
