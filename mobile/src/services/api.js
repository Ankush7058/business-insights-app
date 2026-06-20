import axios from "axios";

const api = axios.create({
  baseURL: "https://business-insights-app-xe6a.onrender.com/api",
});

export default api;