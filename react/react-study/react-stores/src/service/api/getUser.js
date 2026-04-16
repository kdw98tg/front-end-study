import mainApi from "./mainApi";
function getUser() {
  return mainApi.get(`/users`);
}
