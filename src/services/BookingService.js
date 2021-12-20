import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getBookings() {
    return apiClient.get("/api/v1/bookings?limit=10");
  },
  getStats() {
    return apiClient.get("/api/v1/bookings/stats");
  },
};
