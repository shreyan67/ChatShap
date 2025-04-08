import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL

  withCredentials: true,
});
