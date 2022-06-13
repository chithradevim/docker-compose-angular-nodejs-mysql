import axios from "axios";

export default axios.create({
  baseUrl: process.env.ANGULAR_APP_API_BASE_URL || 'http://localhost:8082/api/tutorials',
  headers: {
    "Content-type": "application/json"
  }
});
