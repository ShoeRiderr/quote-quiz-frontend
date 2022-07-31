import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api`;
axios.defaults.headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

export default axios;
