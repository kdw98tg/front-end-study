import { useEffect } from "react";
import { userState } from "../stores/userState";
import { useRecoilState } from "recoil";
import { isLoadingState } from "../stores/userState";
function UserList() {
  // Recoil 상태 불러오기 (useState와 사용법이 거의 동일합니다)
  const [users, setUsers] = useRecoilState(usersState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  useEffect(() => {
    // API 통신 함수
    const fetchUsers = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        // 받아온 데이터를 Recoil atom에 저장
        setUsers(data); 
      } catch (error) {
        console.error('데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setIsLoading(false); // 로딩 끝
      }
    };

    // 데이터가 비어있을 때만 API를 호출하도록 최적화
    // (다른 페이지에 갔다가 돌아왔을 때 불필요한 재호출 방지)
    if (users.length === 0) {
      fetchUsers();
    }
  }, [users.length, setUsers, setIsLoading]);

  // UI 렌더링
  if (isLoading) return <p>데이터를 불러오는 중입니다...</p>;
  if (users.length === 0) return <p>유저 데이터가 없습니다.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          <strong>{user.name}</strong> ({user.email})
        </li>
      ))}
    </ul>
  );
}

export default UserList;
