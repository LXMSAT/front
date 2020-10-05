import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.105:5555/",
});

export default api;
