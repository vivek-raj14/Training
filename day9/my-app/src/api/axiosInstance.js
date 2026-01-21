import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6970625278fec16a63fd8436.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
