import userListAtom, {
  userErrorAtom,
  userLoadingAtom,
} from "../stores/user/userListAtom";

import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getUsers } from "../service/api/getUser";

export function useUser() {
  const [users, setUsers] = useRecoilState(userListAtom);
  const [isLoading, setIsLoading] = useRecoilState(userLoadingAtom);
  const [error, setError] = useRecoilState(userErrorAtom);
  const userCount = useRecoilValue(userCountSelector);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  return {
    users,
    isLoading,
    error,
    userCount,
    fetchUsers,
  };
}
