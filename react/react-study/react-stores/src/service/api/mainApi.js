import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // API의 기본 URL
});

export default mainApi;
