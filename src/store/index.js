import { createStore } from "vuex";
import BookingService from "../services/BookingService";

export default createStore({
  state: {
    stats: {},
    bookings: [],
    booking: {},
    front_desk_alerts: [],
    front_desk_alert: {},
  },
  mutations: {
    SET_STATS(state, stats) {
      state.stats = stats;
    },
    SET_BOOKINGS(state, bookings) {
      state.bookings = bookings;
    },
    ADD_BOOKING_NOTIFICATION(state, notification) {
      state.front_desk_alerts.push(notification);
    },
  },
  actions: {
    fetchStats({ commit }) {
      return BookingService.getStats()
        .then((response) => {
          commit("SET_STATS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchBookings({ commit }) {
      return BookingService.getBookings()
        .then((response) => {
          commit("SET_BOOKINGS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    createBookingNotification({ commit }, notification) {
      BookingService.postBookingNotification(notification)
        .then(() => {
          commit("ADD_BOOKING_NOTIFICATION");
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  modules: {},
});
