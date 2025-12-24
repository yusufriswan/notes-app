import axios from 'axios';

// in production, there's no localhost so we have to make this dynamic
//const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/api";
const api = axios.create({
    baseURL: "http://localhost:5001",
})

export default api;