import React from "react";
import { useUser } from "../hooks/useUser";
function UserList() {
  const { users, isLoading, error, userCount, fetchUsers } = useUser();

  //useUser() 에서 loading, error, 등을 받아와서 처리하는 방식은, 예전에 Redux 에서 많이
  // 사용하던 방식임
  // 요즘에는 SWR이나 React Query 같은 라이브러리를 사용해서, 데이터 패칭과 관련된 상태 관리를 하는 경우가 많음
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <section>
      <p>총 {userCount}명의 유저가 있습니다.</p>

      <button type="button" onClick={fetchUsers}>
        새로고침
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
