import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/",
});
export default instance;
