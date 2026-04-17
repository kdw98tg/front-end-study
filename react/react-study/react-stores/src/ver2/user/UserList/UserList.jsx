import { useUser } from "../hooks/useUser";

//일단 만들긴 했는데, 목적이 서버에 저장되어야 하는가, 아닌가로 나뉨
//서버로 저장되어야 하면 swr을 사용하고, 굳이 그 정보를 recoil로 넘길 필요가 없음
//다만 서버에 저장되지 않는 정보들은 recoil로 저장해서 관리하면됨
//ui 상태라던지, 검색어라던지, 페이지네이션 정보라던지
function UserList() {
  const { users, totalCount, isLoading, error, search, setSearch, refetch } =
    useUser();

  if (isLoading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return (
      <div>
        <p>데이터를 불러오지 못했습니다.</p>
        <button type="button" onClick={refetch}>
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <section>
      <h2>유저 목록 (총 {totalCount}명)</h2>

      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="이름 또는 이메일 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={refetch} style={{ marginLeft: "8px" }}>
          새로고침
        </button>
      </div>

      {users.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserList;
