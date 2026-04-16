import { useEffect } from "react";
import { useFetch } from "./hook/useFetch";
const baseurl = "https://jsonplaceholder.typicode.com";
function CustomHooks2() {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  const { data, fetchUrl } = useFetch(baseurl, "users");

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CustomHooks2;
