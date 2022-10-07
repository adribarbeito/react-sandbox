import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default axiosInstance;
