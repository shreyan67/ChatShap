import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatshap-4.onrender.comi" : "/api",
  withCredentials: true,
});
