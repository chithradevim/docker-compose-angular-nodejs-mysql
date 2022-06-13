import axios from "axios";

const baseUrl = axios.create({
  baseURL: process.env.ANGULAR_APP_API_BASE_URL || 'http://localhost:8082/api/tutorials'
});
