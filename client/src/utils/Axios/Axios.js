import axios from "axios";

const instance = axios.create({
  baseURL: "http://185.185.70.171",
});
export default instance;
