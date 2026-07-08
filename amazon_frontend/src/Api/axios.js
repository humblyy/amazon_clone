import axios from "axios"
const axiosInstance = axios.create({
  // render url
  
  baseURL: "https://amazon-backend-09d0.onrender.com/",
  // local server
  // baseURL: "http://127.0.0.1:5001/clone-53c46/us-central1/api",
  
});

export default axiosInstance