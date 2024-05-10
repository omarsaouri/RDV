import axios from "axios";

const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.access_token,
  },
});

export default adminAxios;
