import mainApi from "./mainApi";
export async function getUsers() {
  const response = await mainApi.get("/users");
  return response.data;
}
